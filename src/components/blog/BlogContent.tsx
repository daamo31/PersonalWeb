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
    <article className="mx-auto w-full max-w-4xl rounded-[2rem] border border-primary/12 bg-card/90 p-6 shadow-sm sm:p-8 lg:p-10">
      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="section-title text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {frontmatter.title}
          </h1>
          <p className="max-w-3xl text-lg leading-7 text-muted-foreground">
            {frontmatter.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">
            Published on {publishedDate}
          </span>
          <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">
            Long-form article
          </span>
        </div>
      </header>

      <section className="prose prose-slate prose-headings:scroll-mt-24 max-w-none pt-8 dark:prose-invert prose-img:rounded-2xl prose-img:border prose-img:border-border/70 prose-pre:bg-muted/40">
        <MDXRemote source={content} components={BlogComponents} />
      </section>
    </article>
  );
}

