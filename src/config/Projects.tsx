import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Python from '@/components/technologies/Python';
import FastAPI from '@/components/technologies/FastAPI';
import Stripe from '@/components/technologies/Stripe';
import Expo from '@/components/technologies/Expo';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'BSB Capital',
    description:
      'A comprehensive financial services platform specializing in cryptocurrencies and investments. It includes a membership system, personalized consulting, analysis tools (BSB Maker), an educational academy, and an administrative dashboard with a modern interface and interactive animations.',
    image: '/project/bsbcapital.png',
    video: '',
    link: 'https://bsbcapital.io',
    technologies: [
      { name: 'React 18', icon: <ReactIcon key="react" /> },
      { name: 'Vite', icon: <Vercel key="vite" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <Motion key="motion" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Lucide React', icon: <Github key="lucide" /> },
      { name: 'React Router', icon: <ReactIcon key="reactrouter" /> },
      { name: 'Context API', icon: <ReactIcon key="contextapi" /> },
      { name: 'Supabase', icon: <PostgreSQL key="supabase" /> },
      { name: 'Stripe', icon: <Stripe key="stripe" /> },
      { name: 'Hotmart API', icon: <Github key="hotmart" /> },
      { name: 'Resend', icon: <Github key="resend" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    github: 'https://github.com/daamo31/bsbcapital',
    live: 'https://bsbcapital.io',
    details: true,
    projectDetailsPageSlug: '/projects/bsb-capital',
    isWorking: true,
  },
  {
    title: 'NoirCheck',
    description:
      'Digital Content Authenticity Verification Platform using blockchain and zkTLS. Mobile app, web app, and real-time statistics system.',
    image: '/project/noircheck.png',
    video: 'https://www.youtube.com/embed/Wh0uridrBIg',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'React Native', icon: <ReactIcon key="reactnative" /> },
      { name: 'Expo', icon: <Expo key="expo" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'XION zkTLS', icon: <Github key="xion" /> },
      { name: 'Material Design 3', icon: <Github key="material" /> },
      { name: 'WalletConnect', icon: <Github key="walletconnect" /> },
      { name: 'Blockchain', icon: <Github key="blockchain" /> },
    ],
    github: 'https://github.com/daamo31/noircheck',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/noircheck',
    isWorking: true,
  },
  {
    title: 'Chuches Inventario',
    description:
      'Professional inventory management for businesses, with support for Android and desktop, camera, OCR, and reports. Modern interface with Kivy/KivyMD, robust permissions and unit tests.',
    image: '/project/chuches-inventario.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Kivy', icon: <Github key="kivy" /> },
      { name: 'KivyMD', icon: <Github key="kivymd" /> },
      { name: 'OCR', icon: <Github key="ocr" /> },
      { name: 'Buildozer', icon: <Github key="buildozer" /> },
      { name: 'Cython', icon: <Github key="cython" /> },
      { name: 'pytest', icon: <Github key="pytest" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/chuches-inventario',
    isWorking: true,
  },
];
