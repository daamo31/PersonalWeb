# Daniel Del Amo — Full Stack Developer & Automation Specialist

A high-performance, design-focused portfolio website showcasing full-stack development expertise, process automation solutions, and AI integration capabilities. Built with modern web technologies and optimized for both technical excellence and recruiter visibility.

![Portfolio Preview](/public/meta/hero.png)

## 🎯 Overview

Professional portfolio and personal website for **Daniel Del Amo**, a Full Stack Developer and Automation Specialist with 6+ years of experience in scalable web applications, cloud architecture, and AI-powered automation solutions.

**Live:** [danieldelamo.dev](https://danieldelamo.dev)

## ✨ Features

### 🎨 Design & UX
- **Neumorphic Design** with iOS-inspired aesthetic (blue tones, soft shadows)
- **Dark/Light Mode** with seamless theme switching
- **Responsive** mobile-first design optimized for all devices
- **90+ Lighthouse Scores** for performance, accessibility, and SEO

### 🔧 Technical Stack
- **Next.js 16** with App Router for modern, efficient routing
- **React 19** with server components for optimal performance
- **TypeScript** for type-safe, maintainable code
- **Tailwind CSS** with custom theme configuration
- **Shadcn UI** components for consistent, accessible interfaces
- **npm** with a committed lockfile for reproducible installs and builds

### 🚀 Performance & SEO
- **Server-Side Rendering (SSR)** for improved SEO
- **Static Site Generation (SSG)** for 42+ optimized pages
- **JSON-LD Structured Data** (Person, WebSite, Article, Project schemas)
- **Open Graph & Twitter Card** optimization for social media
- **Canonical URLs** and semantic HTML5 structure
- **Code Splitting & Lazy Loading** for reduced bundle size
- **Image Optimization** with Next.js Image component

### 📝 Content Management
- **MDX Support** for blog posts and project case studies
- **Frontmatter Metadata** with automatic parsing
- **Blog System** with categories, tags, and timestamps
- **Project Showcase** with filtering and detailed case studies
- **Work Experience Timeline** with technologies and achievements

### 🤖 Automation & AI
- **AI-Powered Chat** assistant with streaming responses
- **Contact Form** with email validation and Telegram integration
- **Process Automation** configuration examples
- **API Integrations** patterns and best practices

### 📊 Analytics & Monitoring
- **Umami Analytics** for privacy-focused web analytics
- **Error Tracking** and performance monitoring
- **Dark Mode Analytics** support

### ♿ Accessibility
- **WCAG 2.1 AA Compliant** structure
- **Semantic HTML5** markup
- **ARIA Labels** for interactive components
- **Keyboard Navigation** support
- **High Contrast** color modes

## 📋 Prerequisites

- **Node.js** v20.9+
- **npm** v11.9
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/daamo31/webpersonal.git
cd webpersonal
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Analytics
NEXT_PUBLIC_UMAMI_SRC="https://your-umami-instance/script.js"
NEXT_PUBLIC_UMAMI_ID="your-website-id"

# Contact Form (Telegram Integration)
TELEGRAM_BOT_TOKEN="your-bot-token-from-botfather"
TELEGRAM_CHAT_ID="your-chat-id"

# Optional: AI Chat Integration
GEMINI_API_KEY="your-gemini-api-key"

# Required for production API rate limiting
UPSTASH_REDIS_REST_URL="https://your-database.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-token"

# Site Configuration
NEXT_PUBLIC_URL="http://localhost:3000"
NODE_ENV="development"
```

Production rate limiting identifies callers only from a valid `x-real-ip` header. Deploy behind a trusted proxy that overwrites this header; forwarded headers supplied by clients are ignored.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Build for Production

```bash
npm run build
npm start
```

## 🔐 Engineering Audit & Remediation

Audit and remediation completed on **2026-10-16**. This section records the reviewed risks, implemented changes, validation performed, and operational requirements.

### Architecture and maintainability

- Consolidated project card and case-study metadata in `src/data/projects.json` for all 16 project routes.
- Project MDX files now contain case-study content only; their metadata is loaded from the catalog.
- Added `featuredOnHome` and `listedOnProjects` flags. Four projects appear in the home-page featured section and five in the projects listing; the remaining published case studies remain available by their existing routes without being added to those lists.
- Replaced `gray-matter` with the maintained `yaml` parser for blog and journey frontmatter. Project metadata is no longer duplicated in MDX frontmatter.
- Added automated checks for catalog IDs, routes, project metadata parity, MDX content, and path-traversal rejection.

### API security and reliability

- Added shared Upstash Redis rate limiting for the contact and chat endpoints. Production fails closed with `503` when Redis is missing or unavailable; development and tests use a bounded in-memory limiter.
- Limited HTTP body reads, contact form fields, chat message length, and chat history size.
- Project and blog loaders accept only kebab-case slugs before constructing file paths.
- Contact notifications use Telegram HTML mode with user-submitted values escaped. The Telegram request has an 8-second timeout.
- Removed API error writes to the repository's `debug-log.txt`. Invalid user input is returned as `400` without logging expected validation errors.
- The API trusts only a valid `x-real-ip` value. Production must run behind a trusted proxy that overwrites this header; client-supplied forwarded IP headers are ignored.
- Added mocked handler tests for invalid contact data, escaped Telegram payloads, and the chat SSE fallback. External provider accounts are not contacted by the test suite.

### Performance and frontend quality

- Added 5-second timeouts to the DEV, Hacker News, and Reddit requests used by the blog feed; the existing 30-minute revalidation remains in place.
- Updated React components flagged by the active lint rules to avoid redundant state and impure render-time calculations.
- Migrated linting to ESLint flat configuration with TypeScript and React Hooks rules. `eslint-config-next` was removed because its dependency chain brought in a vulnerable `braces` package; as a result, Next-specific ESLint rules are not currently enabled.

### Dependencies and reproducible builds

- Updated Next.js and `@next/mdx` to 16.4, retained React 19, and committed the npm lockfile.
- Vercel and local setup use `npm ci` so installs resolve from the same lockfile.
- Removed vulnerable production dependency chains by replacing `gray-matter`; added a patched `postcss-selector-parser` override.
- Current `npm audit` result: **0 vulnerabilities** across production and development dependencies.

### Verification performed

The following commands passed against the final changes:

```bash
npm ci
npm test
npm run lint
npm run build
npm audit
git diff --check
```

The test suite contains **15 passing tests**. The production build generated **43 routes**.

### Production requirements and scope

- Configure `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in the production environment. Without them, contact and chat requests intentionally return `503`.
- Ensure the deployment proxy sets a trustworthy `x-real-ip` header. Local in-memory rate limiting is for development/testing only and is not shared across server instances.
- API integrations were tested with mocks. Live connectivity, credentials, proxy header behavior, and rate-limit behavior on the deployed platform have not been tested from this repository.
- The audit and automated tests improve confidence but are not a penetration test or a guarantee that every vulnerability is absent.

## ⚙️ Configuration Guide

All customizable settings are in `src/config/`:

| File | Purpose |
|------|---------|
| `Meta.tsx` | SEO metadata, titles, descriptions, OG images |
| `Hero.tsx` | Hero section, about text, CTA buttons |
| `Navbar.tsx` | Navigation links and branding |
| `Experience.tsx` | Work experience timeline and achievements |
| `Projects.tsx` | Featured projects and case studies |
| `Services.tsx` | Services and skill offerings |
| `Contact.tsx` | Contact form configuration |
| `Resume.ts` | Resume/CV content |

### Environment Variables Explained

#### Telegram Integration
1. Create a bot: [@BotFather](https://t.me/botfather) on Telegram
2. Get your token from BotFather
3. Start a chat with your bot
4. Get chat ID: Add bot to group as admin, send `/id` to [@rosebot](https://t.me/MissRose_bot)

#### Umami Analytics
1. Self-host or use [Umami Cloud](https://cloud.umami.is)
2. Create a new website in Umami dashboard
3. Copy script URL and website ID
4. Add to `.env.local`

#### Gemini API (Optional)
1. Get API key from [Google AI Studio](https://aistudio.google.com)
2. Add to `.env.local` for AI chat features

## 📝 Content Management

### Adding Blog Posts

Create a new `.mdx` file in `src/data/blog/`:

```mdx
---
title: "Your Blog Title"
description: "Brief description"
date: "2024-01-01"
author: "Daniel Del Amo"
tags: ["tag1", "tag2"]
image: "/blog/thumbnail.jpg"
---

Your blog content here...
```


### Adding Projects

Add each project's card and case-study metadata to `src/data/projects.json`. Use a unique `id`, set `featuredOnHome` for the home page and `listedOnProjects` for the projects list, and use `/projects/<id>` for `projectDetailsPageSlug`. Put fields such as `timeline`, `role`, `status`, `challenges`, `learnings`, and `isPublished` inside the entry's `caseStudy` object.

Then create the matching `.mdx` file in `src/data/projects/`. It contains the case study body only; do not duplicate metadata in frontmatter.

```mdx
Detailed project case study...
```

Run `npm test`, `npm run lint`, and `npm run build` before submitting changes.

### Adding Technology Icons

1. Visit [Devicon](https://devicon.dev/) for SVG icons
2. Create component in `src/components/technologies/`
3. Export and add to technology lists

## 📁 Project Structure

```
webpersonal/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── common/         # Reusable components
│   │   ├── landing/        # Homepage sections
│   │   ├── projects/       # Project components
│   │   ├── experience/     # Experience timeline
│   │   ├── blog/           # Blog components
│   │   ├── ui/             # Shadcn UI components
│   │   └── svgs/           # SVG icons
│   ├── config/             # Configuration files
│   ├── data/               # JSON data and MDX content
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🔍 SEO Optimization

This portfolio includes comprehensive SEO features:

- ✅ **Meta Tags** - Dynamic Open Graph, Twitter Card, and canonical URLs
- ✅ **Structured Data** - JSON-LD schemas (Person, WebSite, Article, Project)
- ✅ **Sitemap** - Auto-generated XML sitemap
- ✅ **Robots.txt** - Search engine crawler configuration
- ✅ **Performance** - Core Web Vitals optimization (LCP, CLS, INP)
- ✅ **Mobile** - Mobile-first responsive design
- ✅ **Accessibility** - WCAG compliance and semantic HTML

## 🎯 ATS-Friendly Format

Optimized for Applicant Tracking Systems:

- Clear hierarchy and semantic structure
- Quantified achievements (40% performance improvement, 90+ Lighthouse scores)
- Technical keywords for parsing (React, Next.js, TypeScript, FastAPI)
- Contact information easily extractable
- Parseable work experience format

## 🛠 Tech Stack Details

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Modern UI library with server components
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Pre-built accessible components

### Backend & APIs
- **Next.js API Routes** - Serverless functions
- **Telegram Bot API** - Contact form integration
- **Gemini API** - AI chat capabilities (optional)

### Styling & Design
- **Neumorphism** - Soft, modern design aesthetic
- **iOS-Inspired Palette** - Blue tones with gradient effects
- **Custom Theme System** - CSS variables for consistency
- **Dark/Light Mode** - Automatic theme switching

### Development Tools
- **npm** - Reproducible dependency management
- **ESLint** - Code quality linting
- **TypeScript** - Type checking
- **Tailwind CSS** - Utility classes
- **Vercel** - Deployment platform

## 📊 Performance Metrics

- **Lighthouse Score**: 90+/100
- **Page Load**: < 2 seconds (LCP)
- **Layout Shift**: < 0.1 (CLS)
- **Interaction Response**: < 200ms (INP)
- **First Input Delay**: < 100ms (FID)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Connect GitHub repository to Vercel
# Auto-deploying on push to main branch
```

### Manual Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Daniel Del Amo**  
Full Stack Developer & Automation Specialist  
[LinkedIn](https://www.linkedin.com/in/danieldelamotarrero/) • [GitHub](https://github.com/daamo31) • [Email](mailto:danieldelamo31@protonmail.com)
