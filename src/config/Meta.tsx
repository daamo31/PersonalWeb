import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalPath?: string;
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title:
    'Daniel Del Amo | Full Stack Developer & Automation Specialist | React • Next.js • TypeScript',
  description:
    'Full Stack Developer and Automation Specialist with experience building scalable web products, internal tools, automation workflows, and polished user experiences using React, Next.js, TypeScript, and modern backend technologies.',
  url: process.env.NEXT_PUBLIC_URL || 'https://danieldelamo.dev',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '',
    github: 'daamo31',
    linkedin: 'danieldelamotarrero',
    email: 'danieldelamo31@protonmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'web development',
    'automation specialist',
    'daniel del amo',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} | Full Stack Developer & Automation Specialist`,
    description:
      'Portfolio of Daniel Del Amo: full stack developer, automation specialist, and product builder focused on UX, scalable systems, and modern web experiences.',
    keywords: [
      'portfolio',
      'developer',
      'full-stack',
      'web development',
      'projects',
      'automation',
      'daniel del amo',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
    canonicalPath: '/',
  },

  // Contact page
  '/contact': {
    title: 'Contact Daniel Del Amo | Full Stack Developer',
    description:
      'Get in touch for web projects, automation, product development, and technical collaborations with a senior full stack engineer.',
    keywords: ['contact', 'hire', 'collaboration', 'freelance', 'developer'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
    canonicalPath: '/contact',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Work Experience | Daniel Del Amo',
    description:
      'Review the professional journey of Daniel Del Amo in software development, automation, and product engineering across multiple industries.',
    keywords: [
      'work experience',
      'career',
      'professional',
      'software developer',
      'employment history',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
    canonicalPath: '/work-experience',
  },

  // Projects page
  '/projects': {
    title: 'Projects | Web Apps, Products & Case Studies',
    description:
      'Explore selected web applications, product work, and technical case studies built with React, Next.js, TypeScript, and modern automation workflows.',
    keywords: [
      'projects',
      'portfolio',
      'web development',
      'applications',
      'software',
      'nextjs projects',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
    canonicalPath: '/projects',
  },

  // Blog page
  '/blog': {
    title: 'Blog | Engineering Notes, Tutorials & Product Thinking',
    description:
      'Read practical notes on engineering, full stack development, automation, product thinking, and modern web workflows from Daniel Del Amo.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'web development',
      'technical writing',
      'engineering notes',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
    canonicalPath: '/blog',
  },

  // Resume page
  '/resume': {
    title: 'Resume | Daniel Del Amo | Full Stack Developer',
    description: `View the professional resume and CV of ${heroConfig.name}, including software engineering experience, skills, and product delivery expertise.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
    canonicalPath: '/resume',
  },

  // Gears page
  '/gears': {
    title: 'Tools & Setup | Developer Workflow',
    description:
      'Explore the hardware, setup, tools, and software used by Daniel Del Amo to build products efficiently and maintain a strong engineering workflow.',
    keywords: [
      'setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'development environment',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
    canonicalPath: '/gears',
  },

  // Setup page
  '/setup': {
    title: 'Developer Setup Guide | VS Code Configuration',
    description:
      'Complete guide to setting up VS Code with my preferred configuration, extensions, fonts, and productivity tools for a clean development workflow.',
    keywords: [
      'vscode',
      'setup',
      'configuration',
      'extensions',
      'development environment',
      'guide',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
    canonicalPath: '/setup',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);
  const canonicalPath = pageMeta.canonicalPath || pathname;
  const normalizedPath = canonicalPath === '/' ? '/' : canonicalPath;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${normalizedPath}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      locale: 'en_US',
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${normalizedPath}`,
    },
  };
}
