import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Colorius',
    position: 'Web Developer',
    location: 'Zaragoza, Spain (Remote)',
    image: '/company/colorius.png',
    description: [
      'Developed and maintained web applications for Colorius, focusing on user experience and security.',
      'Implemented new features and optimized performance for the main platform.',
      'Collaborated with cross-functional teams to deliver scalable solutions.',
      'Integrated APIs and third-party services for enhanced functionality.',
      'Ensured accessibility and responsive design across devices.',
    ],
    startDate: 'July 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
    ],
    website: 'https://www.coloriuris.net/es/index',
    github: '',
    x: '',
  },
  {
    isCurrent: false,
    company: 'GRUPO COBRA',
    position: 'Maintenance Technician',
    location: 'Zaragoza, Spain',
    image: '/company/cobra.png',
    description: [
      'Performed preventive and corrective maintenance on industrial machinery.',
      'Diagnosed and repaired mechanical and electrical failures.',
      'Maintained building systems and automated package sorting systems.',
      'Coordinated with external contractors for repairs and improvement projects.',
      'Managed HVAC, electrical, and plumbing systems to ensure uninterrupted operation.',
      'Documented maintenance activities and incident reports.',
    ],
    startDate: 'September 2023',
    endDate: 'June 2024',
    technologies: [],
    website: '',
    github: '',
    x: '',
  },
  {
    isCurrent: false,
    company: 'Rivasam Intercontinental',
    position: 'Maintenance Technician',
    location: 'Zaragoza, Spain',
    image: '/company/rivasam.png',
    description: [
      'Preventive and corrective maintenance of meat processing equipment, including saws, automatic blades, and packaging lines (Multivac, Ulma).',
      'Maintenance of hydraulic and pneumatic equipment used in slaughter and cutting processes.',
      'Implemented preventive maintenance programs to ensure operational continuity.',
      'Ensured compliance with sanitary and food safety regulations.',
      'Performed welding and mechanical adjustments.',
      'Supervised safety practices and trained new technicians.',
      'Documented maintenance activities and incident reports.',
    ],
    startDate: 'January 2018',
    endDate: 'December 2022',
    technologies: [],
    website: '',
    github: '',
    x: '',
  },
    {
      isCurrent: false,
      company: 'Edainpro Ingenieras y Proyectos',
      position: 'Electrician Technician',
      location: 'Zaragoza, Spain',
      image: '/company/edainpro.png',
      description: [
        'Installed and assembled electrical production lines.',
        'Configured frequency converters (SEW, Omron).',
        'Supervised installation operation and performed mechanical adjustments.',
      ],
      startDate: 'May 2017',
      endDate: 'January 2018',
      technologies: [],
      website: '',
      github: '',
      x: '',
    },
];
