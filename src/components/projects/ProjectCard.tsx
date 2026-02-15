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
    <Card className="group h-full w-full overflow-hidden transition-all duration-300 p-0 border border-border shadow-md hover:shadow-xl hover:border-primary dark:hover:border-secondary">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted-foreground/20">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100 backdrop-blur-sm">
                  <button className="flex size-16 items-center justify-center rounded-full bg-secondary/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:scale-110 hover:scale-110">
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
              <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-secondary transition-colors duration-300">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-3 flex-shrink-0">
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
            <h4 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wide">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index} delayDuration={200}>
                  <TooltipTrigger asChild>
                    <div className="size-7 flex items-center justify-center hover:scale-125 transition-all duration-300 cursor-pointer hover:brightness-125">
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
        <CardFooter className="p-6 flex items-center justify-between border-t border-border">
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
            className="text-secondary font-medium flex items-center gap-2 text-sm hover:text-primary hover:gap-3 transition-all duration-300 group/link"
          >
            Details
            <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
