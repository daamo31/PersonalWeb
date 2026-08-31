import Figma from '@/components/technologies/Figma';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

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
    image: '/experience/colorius.png',
    description: [
      'Lead frontend architecture and component design for multi-tenant platform serving 1000+ users.',
      'Built responsive, accessible UI/UX with React 18 and Next.js, achieving 90+ Lighthouse scores.',
      'Optimized performance: reduced page load times by 40% through code splitting and lazy loading.',
      'Implemented comprehensive testing strategy (unit, integration, e2e) improving reliability by 35%.',
      'Collaborated with backend team on API design and state management for complex workflows.',
      'Mentored junior developers on React best practices and TypeScript type safety.',
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
    image: '/experience/Grupo_cobra.png',
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
    image: '/experience/Rivasam.png',
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
      image: '/experience/Edainpro.png',
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
