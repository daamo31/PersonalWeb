'use client';

import { useEffect, useState } from 'react';
import { DevToArticle, getLatestArticles } from '@/lib/devto';
import Image from 'next/image';

export default function ArticlesSidebar() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const data = await getLatestArticles(6);
      setArticles(data);
      setLoading(false);
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="hidden lg:fixed lg:right-4 lg:top-40 lg:z-0 lg:flex lg:flex-col lg:gap-0 lg:w-72">
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 rounded-lg bg-linear-to-br from-muted to-muted/50 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:fixed lg:right-4 lg:top-40 lg:z-0 lg:flex lg:flex-col lg:gap-2 lg:w-72">
      {/* Header */}
      <div className="mb-2 px-2">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary/80">
          Trending
        </h3>
        <div className="h-px w-8 bg-linear-to-r from-secondary to-accent mt-1" />
      </div>

      {/* Articles Container - Scrollable */}
      <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-secondary/30 scrollbar-track-transparent">
        {articles.map((article, idx) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-stagger-fade group block"
            style={{ animationDelay: `${(idx + 1) * 0.05}s` }}
          >
            <div className="rounded-lg overflow-hidden border border-border bg-linear-to-br from-card to-card/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 p-2">
              {/* Thumbnail + Content */}
              <div className="flex gap-2">
                {/* Thumbnail */}
                {article.cover_image && (
                  <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden bg-muted">
                    <Image
                      src={article.cover_image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h4 className="text-xs font-semibold line-clamp-2 group-hover:text-secondary transition-colors leading-tight">
                    {article.title}
                  </h4>

                  {/* Meta */}
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                    <span>{article.reading_time_minutes} min</span>
                    <span>•</span>
                    <span>{new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>

                  {/* Tags */}
                  {article.tag_list.length > 0 && (
                    <div className="mt-1 flex gap-1 flex-wrap">
                      {article.tag_list.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-1 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
