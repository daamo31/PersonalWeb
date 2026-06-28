import { BlogPostPreview } from '@/types/blog';

import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPostPreview[];
  className?: string;
}

export function BlogList({ posts, className = '' }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-primary/20 bg-card/80 px-8 py-12 text-center shadow-sm">
        <div className="flex size-16 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
          <span className="text-xl font-black">B</span>
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">
          No blog posts found
        </h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Check back later for new content or browse the rest of the site for projects and case studies.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-2 ${className}`}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
