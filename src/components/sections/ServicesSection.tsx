type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

type ServicesSectionProps = {
  services: Service[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="mt-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Services</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">How I can help</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-2xl border border-primary/10 bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
