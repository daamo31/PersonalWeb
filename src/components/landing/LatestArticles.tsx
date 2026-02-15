'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DevToArticle, getLatestArticles } from '@/lib/devto';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExternalLink } from 'lucide-react';

export default function LatestArticles() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      // Fetch latest articles from Dev.to
      const data = await getLatestArticles(4);
      setArticles(data);
      setLoading(false);
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <Container className="mt-20">
        <SectionHeading subHeading="Knowledge" heading="Latest Articles" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-linear-to-br from-muted to-muted/50 animate-pulse"
            />
          ))}
        </div>
      </Container>
    );
  }

  if (articles.length === 0) {
    return (
      <Container className="mt-20">
        <SectionHeading subHeading="Knowledge" heading="Latest Articles" />
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Check out latest articles on{' '}
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors underline"
            >
              Dev.to
            </a>
          </p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Knowledge" heading="Latest Articles" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {articles.map((article, idx) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-stagger-fade group"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className="h-full rounded-xl overflow-hidden border border-border bg-linear-to-br from-card to-card/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
              {/* Image */}
              {article.cover_image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={article.cover_image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Title */}
                <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <span>{article.reading_time_minutes} min read</span>
                    <span>•</span>
                    <span>{new Date(article.published_at).toLocaleDateString()}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                </div>

                {/* Tags */}
                {article.tag_list.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
