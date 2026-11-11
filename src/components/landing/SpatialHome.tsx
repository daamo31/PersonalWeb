'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Layers3,
  MapPin,
  Sparkles,
} from 'lucide-react';

import styles from './SpatialHome.module.css';

const SpatialOrb = dynamic(() => import('./SpatialOrb'), { ssr: false });

type SpatialHomeProps = {
  name: string;
  title: string;
  avatar: string;
  headline: string;
  summary: string;
  primaryCta: { label: string; href: string };
  badges: string[];
  services: { id: string; title: string; description: string }[];
  projects: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    live?: string;
    website?: string;
    detailsHref?: string;
    github?: string;
  }[];
  contact: {
    email: string;
    availability: string;
    linkedin: string;
    github: string;
  };
};

export default function SpatialHome({
  name,
  title,
  avatar,
  headline,
  summary,
  primaryCta,
  badges,
  services,
  projects,
  contact,
}: SpatialHomeProps) {
  const shouldReduceMotion = useReducedMotion();
  const entrance = shouldReduceMotion
    ? { initial: false as const }
    : {
        initial: false as const,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.55, ease: 'easeOut' as const },
      };

  return (
    <main className="relative mx-auto max-w-[1480px] px-3 pb-20 pt-5 sm:px-6 lg:px-8 lg:pl-24">
      <div className={styles.stage}>
        <div className={styles.aurora} aria-hidden="true" />
        <div className="relative p-3 sm:p-5 lg:p-6">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <header className="flex flex-wrap items-center justify-between gap-3 px-1 py-1">
              <div>
                <p className={`${styles.eyebrow} text-[10px] font-semibold uppercase`}>
                  Personal workspace <span className="px-1.5 text-slate-400">/</span> Portfolio
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">A little space to build big ideas.</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/50 px-3.5 py-2 text-xs font-medium text-emerald-800 backdrop-blur-md transition hover:bg-white/75"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Available for projects
              </a>
            </header>

            <motion.section
              id="home"
              {...entrance}
              className={`${styles.glass} scroll-mt-28 overflow-hidden rounded-[1.8rem] p-6 sm:p-8 lg:p-10`}
            >
              <div className={styles.orb} aria-hidden="true">
                <SpatialOrb />
              </div>
              <div className="relative grid items-center gap-9 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <p className={`${styles.eyebrow} flex items-center gap-2 text-[10px] font-semibold uppercase`}>
                    <Sparkles size={13} aria-hidden="true" />
                    {title}
                  </p>
                  <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    {headline}
                  </h1>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    {summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={primaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-700/20 transition hover:-translate-y-0.5 hover:bg-indigo-800"
                    >
                      {primaryCta.label}
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/45 px-5 py-3 text-sm font-medium text-slate-700 backdrop-blur-md transition hover:bg-white/75"
                    >
                      Explore projects
                      <ArrowDownRight size={16} />
                    </Link>
                  </div>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <li
                        key={badge}
                        className="rounded-full border border-white/75 bg-white/40 px-3 py-1.5 text-[11px] font-medium text-indigo-800"
                      >
                        {badge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mx-auto w-full max-w-[18rem]">
                  <div className={styles.avatarGlow} aria-hidden="true" />
                  <div className={`${styles.glassSubtle} relative rounded-[2rem] p-3`}>
                    <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={avatar}
                        alt={name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 70vw, 260px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101326]/90 via-transparent to-white/5" />
                      <div className="absolute inset-x-4 bottom-4">
                        <p className="text-xl font-semibold tracking-tight text-white">{name}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-white/65">
                          <MapPin size={13} aria-hidden="true" />
                          Spain
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1 py-1">
                      <p className="text-xs text-slate-600">Building with intention</p>
                      <span className="rounded-full border border-indigo-300/40 bg-white/50 px-2.5 py-1 text-[10px] font-semibold text-indigo-800">
                        6+ years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <section id="services" className="scroll-mt-28">
              <div className="mb-3 flex items-end justify-between px-1">
                <div>
                  <p className={`${styles.eyebrow} text-[10px] font-semibold uppercase`}>What I do</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight">Capabilities</h2>
                </div>
                <Link href="/work-experience" className="text-xs text-indigo-700 transition hover:text-indigo-950">
                  More about me <ArrowUpRight className="ml-1 inline" size={13} />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {services.slice(0, 3).map((service, index) => (
                  <motion.article
                    key={service.id}
                    {...(shouldReduceMotion
                      ? { initial: false as const }
                      : {
                          initial: false as const,
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.45, delay: index * 0.08 },
                        })}
                    className={`${styles.glassSubtle} rounded-[1.4rem] p-5 transition duration-300 hover:-translate-y-1`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-indigo-200/40 text-indigo-700">
                      {index === 0 ? (
                        <Layers3 size={18} aria-hidden="true" />
                      ) : index === 1 ? (
                        <BriefcaseBusiness size={18} aria-hidden="true" />
                      ) : (
                        <Sparkles size={18} aria-hidden="true" />
                      )}
                    </span>
                    <h3 className="mt-4 font-medium">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="projects" className="scroll-mt-28">
              <div className="mb-3 flex items-end justify-between px-1">
                <div>
                  <p className={`${styles.eyebrow} text-[10px] font-semibold uppercase`}>Selected work</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight">Projects in orbit</h2>
                </div>
                <Link href="/projects" className="text-xs text-indigo-700 transition hover:text-indigo-950">
                  All projects <ArrowUpRight className="ml-1 inline" size={13} />
                </Link>
              </div>
              <div className="grid gap-3 xl:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    {...(shouldReduceMotion
                      ? { initial: false as const }
                      : {
                          initial: false as const,
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.45, delay: index * 0.08 },
                        })}
                    className={`${styles.glassSubtle} flex min-h-64 flex-col rounded-[1.4rem] p-5 transition duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="rounded-full p-2 text-indigo-700 transition hover:bg-white/60 hover:text-indigo-950"
                        >
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/70 bg-white/40 px-2.5 py-1 text-[10px] text-indigo-800"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                    {(project.website || project.detailsHref) && (
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-indigo-700">
                        {project.website && (
                          <a href={project.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Product website <ArrowUpRight size={13} className="inline" aria-hidden="true" />
                          </a>
                        )}
                        {project.detailsHref && (
                          <Link href={project.detailsHref} className="hover:underline">
                            View details <ArrowUpRight size={13} className="inline" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </section>

            <motion.section
              id="contact"
              {...entrance}
              className={`${styles.glass} scroll-mt-28 flex flex-col gap-5 rounded-[1.6rem] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7`}
            >
              <div>
                <p className={`${styles.eyebrow} text-[10px] font-semibold uppercase`}>Have a good one in mind?</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Let’s build something meaningful.</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{contact.availability}</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-700/20 transition hover:-translate-y-0.5 hover:bg-indigo-800"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
            </motion.section>

            <footer className="flex flex-wrap items-center justify-between gap-3 px-1 pb-1 text-xs text-slate-600">
              <span>© {new Date().getFullYear()} {name}</span>
              <div className="flex gap-4">
                <a className="transition hover:text-indigo-800" href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="transition hover:text-indigo-800" href={contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="transition hover:text-indigo-800" href={`mailto:${contact.email}`}>
                  Email
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
