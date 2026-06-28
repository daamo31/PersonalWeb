import LeadForm from '@/components/sections/LeadForm';
import { heroConfig } from '@/config/Hero';
import portfolioData from '@/data/portfolio.json';
import Image from 'next/image';

export default function Page() {
  const data = portfolioData;
  const heroStats = [
    { label: 'Years of experience', value: '6+' },
    { label: 'Core services', value: String(data.services.length) },
    { label: 'Selected projects', value: String(data.projects.length) },
  ];

  return (
    <main className="relative overflow-hidden pb-24 pt-10 sm:pt-14">
      <div className="mesh-background pointer-events-none absolute inset-0" />
      <div className="grain-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="hero-panel line-grid overflow-hidden rounded-[2rem] border border-primary/15 p-6 shadow-[0_20px_60px_rgba(12,32,59,0.08)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  {data.hero.role}
                </p>
                <span className="inline-flex rounded-full border border-border/70 bg-background/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Available for collaboration
                </span>
              </div>

              <h1 className="section-title mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
                {data.hero.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {data.hero.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={data.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
                >
                  {data.hero.primaryCta.label}
                </a>
                <a
                  href={data.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background"
                >
                  {data.hero.secondaryCta.label}
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border/70 bg-background/65 p-4 backdrop-blur">
                    <p className="text-2xl font-black tracking-tight text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {data.hero.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-primary"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
              <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-secondary/35 blur-2xl" />
              <div className="absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-accent/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card/80 p-4 shadow-2xl backdrop-blur">
                <div className="soft-grid rounded-[1.6rem] border border-border/70 bg-background/70 p-4">
                  <div className="overflow-hidden rounded-[1.35rem] border border-primary/15 bg-linear-to-br from-primary/10 via-background to-accent/10">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={heroConfig.avatar}
                        alt={heroConfig.name}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/70 bg-card/90 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">Current focus</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Design systems, automation, and shipping faster without sacrificing quality.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-card/90 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">Delivery style</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Clear scope, quick feedback loops, and polished UI from the first iteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-reveal relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">How I can help</p>
            <h2 className="section-title mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Services for teams that want momentum
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.services.map((service, index) => (
            <article
              key={service.id}
              className="tilt-card group rounded-3xl border border-primary/12 bg-card/90 p-6 shadow-sm transition-colors duration-200 hover:border-primary/25"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/65">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{service.title}</h3>
                </div>
                <span className="h-10 w-10 rounded-2xl bg-primary/10 ring-1 ring-primary/10 transition-colors group-hover:bg-primary/15" />
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-reveal relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Featured projects</p>
          <h2 className="section-title mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Proof of execution</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {data.projects.map((project, index) => {
            const label = String(index + 1).padStart(2, '0');

            return (
              <article
                key={project.id}
                className="tilt-card rounded-3xl border border-primary/12 bg-card/90 p-6 shadow-sm"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="grid gap-5 sm:grid-cols-[0.78fr_1.22fr]">
                  <div className="overflow-hidden rounded-2xl border border-border/70 bg-linear-to-br from-primary/12 via-background to-accent/12 p-4">
                    <div className="flex h-full min-h-40 flex-col justify-between rounded-2xl border border-primary/10 bg-background/75 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Project {label}
                        </span>
                        <span className="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(20,184,166,0.12)]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Stack</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((tech) => (
                            <li key={tech} className="rounded-full border border-border bg-muted/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/65">Selected work</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{project.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
                        >
                          View demo
                        </a>
                      ) : null}
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary/5"
                        >
                          Source code
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="section-reveal relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-primary/15 bg-card/90 p-7 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Contact</p>
              <h2 className="section-title mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Tell me what you need</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{data.contact.availability}</p>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  Email: <span className="font-medium text-foreground">{data.contact.email}</span>
                </p>
                <p className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  Phone: <span className="font-medium text-foreground">{data.contact.phone}</span>
                </p>
                <p className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  LinkedIn:{' '}
                  <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                    profile
                  </a>
                </p>
                <p className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                  GitHub:{' '}
                  <a href={data.contact.github} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                    @daamo31
                  </a>
                </p>
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
