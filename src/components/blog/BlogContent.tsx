import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogFrontmatter } from '@/types/blog';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import Calender from '../svgs/Calender';
import { BlogComponents } from './BlogComponents';

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({ frontmatter, content }: BlogContentProps) {
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });







   // Blog deshabilitado temporalmente
   return null;
  );
}
