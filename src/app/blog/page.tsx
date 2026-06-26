import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

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

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="line-grid rounded-3xl border border-primary/15 bg-card/80 p-10 text-center backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Editorial</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-6xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          This section is being redesigned and will be available soon.
        </p>
      </div>
    </div>
  );
}
