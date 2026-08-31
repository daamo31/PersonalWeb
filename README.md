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

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- Bun (preferred) or npm

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
TELEGRAM_BOT_TOKEN="your-token"
TELEGRAM_CHAT_ID="your-chat-id"
GEMINI_API_KEY="your-api-key"
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```

### Setting up Telegram Integration

1. Create a new bot with [@BotFather](https://t.me/botfather) on Telegram
2. Copy the bot token provided
3. Start a chat with your bot
4. Get your chat ID by:
   - Add your `bot` in a group as `admin`
   - Then send `/id` to [@rosebot](https://t.me/MissRose_bot)
   - Boom! you get your `id`

### Setting up Umami Analytics

1. Visit Umami:
   - Self-host Umami or use [Umami Cloud](https://cloud.umami.is)
   - Follow Umami's [installation guide](https://umami.is/docs/install)

2. Get your credentials:
   - Copy your Umami script URL (ends with `/script.js`)
   - Get your website ID from Umami dashboard

3. Configure environment variables:
   ```env
   NEXT_PUBLIC_UMAMI_SRC="https://[your-umami-instance]/script.js"
   NEXT_PUBLIC_UMAMI_ID="your-website-id"
   ```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ramxcodes/sleek-portfolio.git
   cd sleek-portfolio
   ```

2. Install dependencies:

   ```bash
   # Using bun (recommended)
   bun install

   # Using npm
   npm install
   ```

3. Run the development server:

   ```bash
   # Using bun
   bun dev

   # Using npm
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

The project uses configuration files in the `src/config` directory for easy customization:

- `About.tsx` - About section content
- `Contact.tsx` - Contact form settings
- `Experience.tsx` - Work experience details
- `Footer.tsx` - Footer links and content
- `Gears.tsx` - Setup/gear section
- `Hero.tsx` - Hero section content
- `Meta.tsx` - SEO and metadata
- `Navbar.tsx` - Navigation links
- `Projects.tsx` - Project showcase settings
- `Quote.ts` - Random quotes configuration
- `Resume.ts` - Resume section details
- `Setup.tsx` - Development setup information
- `cat.ts` - Enable disable the cat

## Adding New Technology Icons

1. Visit [Devicon](https://devicon.dev/) to find the icon you want to add
2. Create a new component in `src/components/technologies/`
3. Follow the existing component structure for consistency

Example:

```tsx
export const NewTechIcon = () => {
  return <svg>// SVG content from devicon</svg>;
};
```

## Adding Content

### Blog Posts

1. Create a new MDX file in `src/data/blog/`
2. Add metadata and content following existing post structure
3. Add blog thumbnail in `public/blog/`

### Projects

1. Create a new MDX file in `src/data/projects/`
2. Add metadata and content following existing project structure
3. Add project thumbnail in `public/project/`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
