import { type Project } from '@/types/project';
import React from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export function ProjectList({ projects, className }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-primary/20 bg-card/80 px-8 py-12 text-center shadow-sm">
        <div className="flex size-16 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
          <span className="text-xl font-black">P</span>
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">
          No projects found.
        </h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          New work will appear here as soon as it is published.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ${className}`}
    >
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
