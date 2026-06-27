import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getPublishedBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

type TechNewsItem = {
  title: string;
  url: string;
  source: string;
};

export const generateMetadata = (): Metadata => {
  const metadata = getMetadata('/blog');
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      } as Robots['googleBot'],
    },
  };
};

async function getTechNews(): Promise<TechNewsItem[]> {
  const limit = 8;

  try {
    const devTags = ['ai', 'productivity', 'webdev', 'nextjs', 'typescript'];

    const [devItems, hackerNewsItems, redditItems] = await Promise.all([
      (async (): Promise<TechNewsItem[]> => {
        try {
          const responses = await Promise.all(
            devTags.map((tag) =>
              fetch(`https://dev.to/api/articles?tag=${tag}&top=10&per_page=3`, {
                next: { revalidate: 1800 },
              }),
            ),
          );

          const validResponses = responses.filter((response) => response.ok);
          if (validResponses.length === 0) {
            return [];
          }

          const payloads = await Promise.all(validResponses.map((response) => response.json()));
          const rawItems = payloads.flatMap((payload) => (Array.isArray(payload) ? payload : []));

          return rawItems
            .map((item) => ({
              title: typeof item?.title === 'string' ? item.title : '',
              url: typeof item?.url === 'string' ? item.url : '',
              source: 'DEV Community',
            }))
            .filter((item) => item.title && item.url)
            .slice(0, 8);
        } catch {
          return [];
        }
      })(),
      (async (): Promise<TechNewsItem[]> => {
        try {
          const response = await fetch(
            'https://hn.algolia.com/api/v1/search_by_date?tags=story&query=ai%20OR%20typescript%20OR%20frontend',
            {
              next: { revalidate: 1800 },
            },
          );

          if (!response.ok) {
            return [];
          }

          const data = await response.json();
          const hits = Array.isArray(data?.hits) ? data.hits : [];

          return hits
            .map((item) => {
              const title = typeof item?.title === 'string' ? item.title : '';
              const url =
                typeof item?.url === 'string'
                  ? item.url
                  : typeof item?.story_url === 'string'
                    ? item.story_url
                    : '';

              return {
                title,
                url,
                source: 'Hacker News',
              };
            })
            .filter((item) => item.title && item.url)
            .slice(0, 8);
        } catch {
          return [];
        }
      })(),
      (async (): Promise<TechNewsItem[]> => {
        try {
          const response = await fetch('https://www.reddit.com/r/programming/top.json?t=day&limit=10', {
            next: { revalidate: 1800 },
            headers: {
              'User-Agent': 'personalweb-news-feed/1.0',
            },
          });

          if (!response.ok) {
            return [];
          }

          const data = await response.json();
          const children = Array.isArray(data?.data?.children) ? data.data.children : [];

          return children
            .map((entry) => {
              const post = entry?.data;
              const title = typeof post?.title === 'string' ? post.title : '';
              const externalUrl =
                typeof post?.url_overridden_by_dest === 'string'
                  ? post.url_overridden_by_dest
                  : typeof post?.url === 'string'
                    ? post.url
                    : '';

              return {
                title,
                url: externalUrl,
                source: 'Reddit /r/programming',
              };
            })
            .filter((item) => item.title && item.url)
            .slice(0, 8);
        } catch {
          return [];
        }
      })(),
    ]);

    const buckets: TechNewsItem[][] = [devItems, hackerNewsItems, redditItems].filter(
      (items) => items.length > 0,
    );

    if (buckets.length === 0) {
      return [];
    }

    const deduped = new Map<string, TechNewsItem>();
    const cursor = new Array(buckets.length).fill(0);

    while (deduped.size < limit) {
      let addedInRound = false;

      for (let i = 0; i < buckets.length && deduped.size < limit; i += 1) {
        const items = buckets[i];
        const index = cursor[i];

        if (index >= items.length) {
          continue;
        }

        cursor[i] += 1;
        const item = items[index];
        const dedupeKey = item.url.replace(/\/$/, '');

        if (!deduped.has(dedupeKey)) {
          deduped.set(dedupeKey, item);
          addedInRound = true;
        }
      }

      if (!addedInRound) {
        break;
      }
    }

    return Array.from(deduped.values()).slice(0, limit);
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = getPublishedBlogPosts();
  const techNews = await getTechNews();

  return (
    <Container className="py-14">
      <div className="space-y-10">
        <div className="line-grid rounded-3xl border border-primary/15 bg-card/80 p-8 text-center backdrop-blur-md sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Editorial</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-6xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Notes on engineering, product building, and modern web development.
          </p>
        </div>

        <section className="space-y-5 rounded-3xl border border-primary/15 bg-card/90 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Articles</h2>
            <span className="text-sm text-muted-foreground">{posts.length} published</span>
          </div>
          <BlogList posts={posts} />
        </section>

        <section className="space-y-5 rounded-3xl border border-primary/15 bg-card/90 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Developer News</h2>
            <span className="text-sm text-muted-foreground">Auto-updated from multiple sources</span>
          </div>

          {techNews.length > 0 ? (
            <ul className="space-y-3">
              {techNews.map((item) => (
                <li key={`${item.source}-${item.url}`}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start justify-between gap-4 rounded-xl border border-border bg-background/60 px-4 py-3 transition hover:border-primary/35"
                  >
                    <span className="text-sm font-medium leading-snug">{item.title}</span>
                    <span className="shrink-0 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
                      {item.source}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl border border-dashed border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground">
              News feed temporarily unavailable. Please try again later.
            </p>
          )}
        </section>
      </div>
    </Container>
  );
}
