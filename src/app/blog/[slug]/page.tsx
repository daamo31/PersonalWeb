import { BlogContent } from '@/components/blog/BlogContent';
import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
import FontSizeControls from '@/components/common/FontSizeControls';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/Meta';
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getRelatedPosts,
} from '@/lib/blog';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    return {
      title: 'Post Not Found',
    };
  }

  const { title, description, image } = post.frontmatter;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, 3);

  return (
    <>
      <Container className="py-14 sm:py-16">
        <div className="space-y-10">
          <div className="hero-panel line-grid overflow-hidden rounded-[2rem] border border-primary/15 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-5">
                <Button
                  variant="ghost"
                  asChild
                  className="w-fit rounded-full border border-primary/15 bg-background/70 px-4 py-2 text-primary shadow-sm hover:bg-background"
                >
                  <Link href="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="size-4" />
                    <span>Back to Blog</span>
                  </Link>
                </Button>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Editorial article
                  </p>
                  <h1 className="section-title mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                    {post.frontmatter.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {post.frontmatter.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[22rem] lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/65">
                    Published
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/65">
                    Reading mode
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">Focused, long-form</p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/65">
                    Tags
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {post.frontmatter.tags.length} topics
                  </p>
                </div>
              </div>
            </div>
          </div>

          <BlogContent frontmatter={post.frontmatter} content={post.content} />

          {relatedPosts.length > 0 && (
            <section className="space-y-6 rounded-[2rem] border border-primary/15 bg-card/90 p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Related reading
                  </p>
                  <h2 className="section-title mt-2 text-2xl font-semibold sm:text-3xl">
                    More posts worth reading
                  </h2>
                </div>
                <span className="text-sm text-muted-foreground">
                  Picked from the same content pool
                </span>
              </div>
              <BlogList posts={relatedPosts} />
            </section>
          )}

          <div className="rounded-[2rem] border border-primary/15 bg-card/90 p-6 text-center shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Continue browsing
            </p>
            <h2 className="section-title mt-2 text-2xl font-semibold sm:text-3xl">
              View the rest of the blog
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Browse more notes on engineering, product building, and web development.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full px-6">
              <Link href="/blog">View All Blogs</Link>
            </Button>
          </div>
        </div>
      </Container>
      <FontSizeControls />
    </>
  );
}
