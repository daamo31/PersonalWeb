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
    <article className="group overflow-hidden rounded-3xl border border-primary/12 bg-card/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/10">
          <Image
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="space-y-3 p-5 sm:p-6">
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
            <span className="font-medium text-primary transition group-hover:translate-x-0.5">Read article</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
