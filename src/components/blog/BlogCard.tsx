import { BlogPostPreview } from '@/types/blog';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishedDate = new Date(post.frontmatter.date).toLocaleDateString(
    'en-GB',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-primary/15 bg-card/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 hover:scale-[1.02]"
          />
        </div>

        <div className="space-y-3 p-5">
          <div className="flex flex-wrap gap-2">
            {post.frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="line-clamp-2 text-xl font-semibold tracking-tight">
            {post.frontmatter.title}
          </h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.frontmatter.description}
          </p>

          <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
            <span>{publishedDate}</span>
            <span className="font-medium text-primary">Read article</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
