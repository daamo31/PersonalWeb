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
- **Next.js 15** with App Router for modern, efficient routing
- **React 19** with server components for optimal performance
- **TypeScript** for type-safe, maintainable code
- **Tailwind CSS** with custom theme configuration
- **Shadcn UI** components for consistent, accessible interfaces
- **Bun** runtime for fast builds and development

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

- **Node.js** v18+ or v20+
- **Bun** v1.0+ (recommended) or npm 9+
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/daamo31/webpersonal.git
cd webpersonal
```

### 2. Install Dependencies

```bash
# Using Bun (recommended for faster installs)
bun install

# Or using npm
npm install
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

# Site Configuration
NEXT_PUBLIC_URL="http://localhost:3000"
NODE_ENV="development"
```

### 4. Run Development Server

```bash
# Using Bun
bun dev

# Using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Build for Production

```bash
# Using Bun
bun run build
bun start

# Using npm
npm run build
npm start
```

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

Create a new `.mdx` file in `src/data/projects/`:

```mdx
---
title: "Your Project Title"
description: "Project description"
image: "/project/thumbnail.jpg"
link: "https://project-url.com"
github: "https://github.com/yourusername/project"
technologies: ["React", "Next.js", "TypeScript"]
isWorking: true
---

Detailed project case study...
```

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
- **Next.js 15** - React framework with App Router
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
- **Bun** - Fast JavaScript runtime
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
bun run build

# Start production server
bun start
```

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Daniel Del Amo**  
Full Stack Developer & Automation Specialist  
[LinkedIn](https://www.linkedin.com/in/danieldelamotarrero/) • [GitHub](https://github.com/daamo31) • [Email](mailto:danieldelamo31@protonmail.com)
