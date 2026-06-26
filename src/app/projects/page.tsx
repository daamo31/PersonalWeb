import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
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
  return (
    <Container className="py-14">
      <div className="space-y-8">
        <div className="line-grid rounded-3xl border border-primary/15 bg-card/80 p-7 text-center backdrop-blur-md sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Portfolio</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-6xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            My projects and work across different technologies and domains.
          </p>
        </div>

        <Separator />

        <div className="space-y-6 rounded-3xl border border-primary/15 bg-card/90 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Projects
              {projects.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({projects.length}{' '}
                  {projects.length === 1 ? 'project' : 'projects'})
                </span>
              )}
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
