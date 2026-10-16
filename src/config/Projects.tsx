import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import Github from '@/components/technologies/Github';
import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import Stripe from '@/components/technologies/Stripe';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import projectCatalog from '@/data/projects.json';
import { Project } from '@/types/project';
import React from 'react';

const technologyIcons: Record<string, () => React.ReactNode> = {
  Expo: () => <Expo />,
  Express: () => <ExpressJs />,
  FastAPI: () => <FastAPI />,
  'Framer Motion': () => <Motion />,
  'Next.js': () => <NextJs />,
  'Next.js 15': () => <NextJs />,
  'Node.js': () => <NodeJs />,
  PostgreSQL: () => <PostgreSQL />,
  PostGIS: () => <PostgreSQL />,
  Python: () => <Python />,
  React: () => <ReactIcon />,
  'React 18': () => <ReactIcon />,
  'React 19': () => <ReactIcon />,
  'React Native': () => <ReactIcon />,
  'React Router': () => <ReactIcon />,
  'shadcn/ui': () => <Shadcn />,
  Stripe: () => <Stripe />,
  'Tailwind CSS': () => <TailwindCss />,
  TypeScript: () => <TypeScript />,
  Vite: () => <Vercel />,
  Supabase: () => <PostgreSQL />,
};

export const projects: Project[] = projectCatalog.map((project) => ({
  ...project,
  technologies: project.technologies.map((name) => ({
    name,
    icon: technologyIcons[name]?.() ?? <Github />,
  })),
}));

export const featuredProjects = projects.filter(
  (project) => project.featuredOnHome,
);
