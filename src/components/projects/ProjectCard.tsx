'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Card className="group h-full w-full overflow-hidden border border-primary/12 p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden bg-linear-to-br from-primary/10 via-muted to-accent/10">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground shadow-sm backdrop-blur">
            <span className={`size-2 rounded-full ${project.isWorking ? 'bg-green-500' : 'bg-orange-500'}`} />
            {project.isWorking ? 'Live product' : 'In development'}
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/25 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <button className="flex size-16 items-center justify-center rounded-full bg-secondary/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary hover:scale-110">
                    <PlayCircle className="text-white" />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <div className="aspect-video w-full">
                  {project.video && project.video.startsWith('https://www.youtube.com/embed/') ? (
                    <iframe
                      className="h-full w-full object-cover rounded-lg border-none"
                      src={project.video}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="h-full w-full object-cover rounded-lg"
                      src={project.video}
                      autoPlay
                      loop
                      controls
                    />
                  )}
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 pt-6">
        <div className="space-y-4">
          {/* Project Header - Title and Icons */}
          <div className="flex items-start justify-between gap-4">
            <Link href={project.projectDetailsPageSlug}>
              <h3 className="text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-3 shrink-0">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="text-muted-foreground flex size-6 items-center justify-center hover:text-primary transition-all duration-300 hover:scale-110"
                    href={project.link}
                    target="_blank"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Website</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      className="text-muted-foreground flex size-6 items-center justify-center hover:text-primary transition-all duration-300 hover:scale-110"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index} delayDuration={200}>
                  <TooltipTrigger asChild>
                    <div className="flex size-7 cursor-pointer items-center justify-center transition-all duration-300 hover:scale-125 hover:brightness-125">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-foreground text-background">
                    <p className="text-xs font-medium">{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {project.details && (
        <CardFooter className="flex items-center justify-between border-t border-border p-6">
          <div
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
              project.isWorking
                ? 'border border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300'
                : 'border border-orange-500/50 bg-orange-500/10 text-orange-700 dark:text-orange-300'
            }`}
          >
            <div className={`size-2 rounded-full ${project.isWorking ? 'bg-green-500 animate-pulse' : 'bg-orange-500 animate-pulse'}`} />
            {project.isWorking ? 'Live' : 'In Development'}
          </div>
          <Link
            href={project.projectDetailsPageSlug}
            className="group/link flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:gap-3 hover:text-foreground"
          >
            Details
            <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
