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
    <div className="text-center py-20 text-2xl font-bold text-gray-400">
      Blog is currently disabled.
    </div>
  );
}
