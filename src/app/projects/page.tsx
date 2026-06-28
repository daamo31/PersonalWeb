import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { projects } from '@/config/Projects';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ProjectsPage() {
  const stats = [
    { label: 'Case studies', value: String(projects.length) },
    { label: 'Live products', value: projects.filter((project) => project.isWorking).length > 0 ? '2+' : '0' },
    { label: 'Stacks covered', value: '6+' },
  ];

  return (
    <Container className="py-14">
      <div className="space-y-8">
        <div className="line-grid overflow-hidden rounded-[2rem] border border-primary/15 bg-card/85 p-7 shadow-sm backdrop-blur-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Portfolio</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-6xl">Projects</h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
                My projects and work across different technologies and domains.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/70 bg-background/70 p-4 text-left">
                  <p className="text-2xl font-black tracking-tight text-foreground">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-primary/15 bg-card/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="section-title text-2xl font-semibold">
              All Projects
              {projects.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({projects.length}{' '}
                  {projects.length === 1 ? 'project' : 'projects'})
                </span>
              )}
            </h2>
            <p className="text-sm text-muted-foreground">Selected products, case studies, and experiments.</p>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
