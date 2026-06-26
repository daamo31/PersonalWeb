import LeadForm from '@/components/sections/LeadForm';
import { heroConfig } from '@/config/Hero';
import portfolioData from '@/data/portfolio.json';
import Image from 'next/image';

export default function Page() {
  const data = portfolioData;

  return (
    <main className="relative overflow-hidden pb-24 pt-14">
      <div className="mesh-background pointer-events-none absolute inset-0" />
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="line-grid rounded-3xl border border-primary/15 bg-card/80 p-7 backdrop-blur-md sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {data.hero.role}
              </p>

              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                {data.hero.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                {data.hero.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={data.hero.primaryCta.href}
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  {data.hero.primaryCta.label}
                </a>
                <a
                  href={data.hero.secondaryCta.href}
                  className="rounded-full border border-primary/25 bg-background/80 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-background"
                >
                  {data.hero.secondaryCta.label}
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {data.hero.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-primary"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-b from-primary/10 to-accent/10 shadow-2xl">
                <Image
                  src={heroConfig.avatar}
                  alt={heroConfig.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 32vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-reveal relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">How I can help</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Services for teams that want momentum</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, index) => (
            <article
              key={service.id}
              className="tilt-card rounded-2xl border border-primary/15 bg-card/90 p-6 shadow-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Featured projects</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Proof of execution</h2>
        </div>

        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <article
              key={project.id}
              className="tilt-card rounded-2xl border border-primary/15 bg-card/90 p-6 shadow-sm"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      View demo
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-primary/25 px-4 py-2 text-sm font-semibold text-primary"
                    >
                      Source code
                    </a>
                  ) : null}
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-muted/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-reveal relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-primary/15 bg-card/90 p-7 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Contact</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Tell me what you need</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{data.contact.availability}</p>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p>
                  Email: <span className="font-medium text-foreground">{data.contact.email}</span>
                </p>
                <p>
                  Phone: <span className="font-medium text-foreground">{data.contact.phone}</span>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                    profile
                  </a>
                </p>
                <p>
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
