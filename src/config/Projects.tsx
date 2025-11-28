// ...existing code...
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
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'NotesBuddy',
    description:
      'A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools',
    image: '/project/notesbuddy.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'BSB Capital',
    description:
      'Plataforma completa de servicios financieros especializada en criptomonedas e inversiones. Incluye sistema de membresías, consultoría personalizada, herramientas de análisis (BSB Maker), academia educativa y dashboard administrativo con interfaz moderna y animaciones interactivas.',
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
      { name: 'Stripe', icon: <Github key="stripe" /> },
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
    video: '',
    link: '',
    technologies: [
      { name: 'Python', icon: <Github key="python" /> },
      { name: 'FastAPI', icon: <Github key="fastapi" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'React Native', icon: <ReactIcon key="reactnative" /> },
      { name: 'Expo', icon: <Github key="expo" /> },
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
        'Gestión profesional de inventario para comercios, con soporte para Android y escritorio, cámara, OCR y reportes. Interfaz moderna con Kivy/KivyMD, permisos robustos y tests unitarios.',
      image: '/project/chuches-inventario.png',
      video: '',
      link: '',
      technologies: [
        { name: 'Python', icon: <Github key="python" /> },
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
