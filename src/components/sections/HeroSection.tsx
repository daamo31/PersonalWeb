type HeroData = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  badges: string[];
};

type HeroSectionProps = {
  hero: HeroData;
};

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur md:p-14">
      <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-accent/30 blur-3xl" />

      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{hero.role}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">{hero.headline}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{hero.summary}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={hero.primaryCta.href}
          className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          {hero.primaryCta.label}
        </a>
        <a
          href={hero.secondaryCta.href}
          className="rounded-full border border-primary/25 bg-white/70 px-6 py-3 font-semibold text-primary transition hover:bg-white"
        >
          {hero.secondaryCta.label}
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {hero.badges.map((badge) => (
          <li key={badge} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
            {badge}
          </li>
        ))}
      </ul>
    </section>
  );
}
