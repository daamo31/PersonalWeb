import { BlogFrontmatter } from '@/types/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { BlogComponents } from './BlogComponents';

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({ frontmatter, content }: BlogContentProps) {
  const publishedDate = new Date(frontmatter.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mx-auto w-full max-w-3xl space-y-8">
      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="text-lg text-muted-foreground">{frontmatter.description}</p>
        <p className="text-sm text-muted-foreground">Published on {publishedDate}</p>
      </header>

      <section className="prose prose-slate max-w-none dark:prose-invert">
        <MDXRemote source={content} components={BlogComponents} />
      </section>
    </article>
  );
}

