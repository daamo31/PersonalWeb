import { parse } from 'yaml';

export function parseFrontmatter<T>(source: string): {
  data: T;
  content: string;
} {
  const normalizedSource = source.replace(/^\uFEFF/, '');
  const match = normalizedSource.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

  if (!match) {
    throw new Error('Missing or invalid YAML frontmatter');
  }

  return {
    data: parse(match[1]) as T,
    content: normalizedSource.slice(match[0].length),
  };
}