type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  repo: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="proyectos" className="mt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Portafolio</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Proyectos destacados</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="rounded-2xl border border-primary/10 bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-muted-foreground">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>

            {project.url || project.repo ? (
              <div className="mt-6 flex gap-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    Ver demo
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    Codigo
                  </a>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
