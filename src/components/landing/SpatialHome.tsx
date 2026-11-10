'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Home,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

import styles from './SpatialHome.module.css';

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
    github?: string;
  }[];
  contact: {
    email: string;
    availability: string;
    linkedin: string;
    github: string;
  };
};

const navigation = [
  { label: 'Overview', href: '#home', icon: Home },
  { label: 'Services', href: '#services', icon: BriefcaseBusiness },
  { label: 'Projects', href: '#projects', icon: Layers3 },
  { label: 'Contact', href: '#contact', icon: Mail },
];

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
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.55, ease: 'easeOut' as const },
      };

  return (
    <main className="relative mx-auto max-w-[1480px] px-3 pb-12 pt-5 sm:px-6 lg:px-8">
      <div className={styles.stage}>
        <div className={styles.aurora} aria-hidden="true" />
        <div className="relative grid gap-4 p-3 sm:p-5 lg:grid-cols-[5.25rem_minmax(0,1fr)] lg:gap-5 lg:p-6">
          <aside
            className={`${styles.glass} flex items-center justify-between gap-2 rounded-[1.6rem] p-2 lg:sticky lg:top-28 lg:h-fit lg:flex-col lg:justify-start lg:gap-3 lg:py-4`}
            aria-label="Portfolio navigation"
          >
            <Link
              href="#home"
              aria-label="Go to overview"
              className={`${styles.navItem} ${styles.navActive} flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl`}
            >
              <Sparkles size={20} aria-hidden="true" />
            </Link>
            <div className="flex flex-1 items-center justify-around gap-1 lg:flex-col lg:gap-3">
              {navigation.map(({ label, href, icon: Icon }, index) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  aria-current={index === 0 ? 'location' : undefined}
                  className={`${styles.navItem} ${index === 0 ? styles.navActive : ''} flex h-12 w-12 items-center justify-center rounded-2xl`}
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Send an email"
              className={`${styles.navItem} hidden h-12 w-12 items-center justify-center rounded-2xl lg:flex`}
            >
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </aside>

          <div className="min-w-0 space-y-4 sm:space-y-5">
            <header className="flex flex-wrap items-center justify-between gap-3 px-1 py-1">
              <div>
                <p className={`${styles.eyebrow} text-[10px] font-semibold uppercase`}>
                  Personal workspace <span className="px-1.5 text-white/30">/</span> Portfolio
                </p>
                <p className="mt-1 text-sm font-medium text-white/75">A little space to build big ideas.</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3.5 py-2 text-xs font-medium text-emerald-100 transition hover:bg-emerald-300/15"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Available for projects
              </a>
            </header>

            <motion.section
              id="home"
              {...entrance}
              className={`${styles.glass} scroll-mt-28 overflow-hidden rounded-[1.8rem] p-6 sm:p-8 lg:p-10`}
            >
              <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />
              <div className="relative grid items-center gap-9 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <p className={`${styles.eyebrow} flex items-center gap-2 text-[10px] font-semibold uppercase`}>
                    <Sparkles size={13} aria-hidden="true" />
                    {title}
                  </p>
                  <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    {headline}
                  </h1>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-indigo-100/65 sm:text-base">
                    {summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={primaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-50"
                    >
                      {primaryCta.label}
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.045] px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                    >
                      Explore projects
                      <ArrowDownRight size={16} />
                    </Link>
                  </div>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <li
                        key={badge}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] font-medium text-indigo-100/75"
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
                        <p className="text-xl font-semibold tracking-tight">{name}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-white/65">
                          <MapPin size={13} aria-hidden="true" />
                          Zaragoza, Spain
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1 py-1">
                      <p className="text-xs text-white/55">Building with intention</p>
                      <span className="rounded-full border border-cyan-100/15 bg-cyan-200/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-100">
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
                <Link href="/work-experience" className="text-xs text-indigo-100/55 transition hover:text-white">
                  More about me <ArrowUpRight className="ml-1 inline" size={13} />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {services.slice(0, 3).map((service, index) => (
                  <motion.article
                    key={service.id}
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          initial: { opacity: 0, y: 14 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.45, delay: index * 0.08 },
                        })}
                    className={`${styles.glassSubtle} rounded-[1.4rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100/10 bg-indigo-200/10 text-indigo-100">
                      {index === 0 ? (
                        <Layers3 size={18} aria-hidden="true" />
                      ) : index === 1 ? (
                        <BriefcaseBusiness size={18} aria-hidden="true" />
                      ) : (
                        <Sparkles size={18} aria-hidden="true" />
                      )}
                    </span>
                    <h3 className="mt-4 font-medium">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-indigo-100/55">{service.description}</p>
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
                <Link href="/projects" className="text-xs text-indigo-100/55 transition hover:text-white">
                  All projects <ArrowUpRight className="ml-1 inline" size={13} />
                </Link>
              </div>
              <div className="grid gap-3 xl:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          initial: { opacity: 0, y: 14 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.45, delay: index * 0.08 },
                        })}
                    className={`${styles.glassSubtle} flex min-h-64 flex-col rounded-[1.4rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-100/45">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="rounded-full p-2 text-white/55 transition hover:bg-white/10 hover:text-white"
                        >
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-indigo-100/55">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-indigo-100/65"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
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
                <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100/55">{contact.availability}</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
            </motion.section>

            <footer className="flex flex-wrap items-center justify-between gap-3 px-1 pb-1 text-xs text-white/40">
              <span>© {new Date().getFullYear()} {name}</span>
              <div className="flex gap-4">
                <a className="transition hover:text-white" href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="transition hover:text-white" href={contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="transition hover:text-white" href={`mailto:${contact.email}`}>
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
