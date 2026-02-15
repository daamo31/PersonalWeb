import { skills } from '@/config/SkillsEducation';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import React from 'react';
import { Badge } from '../ui/badge';

export default function TechStack() {
  return (
    <Container className="mt-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="group">
        <SectionHeading subHeading="My Arsenal" heading="Tech Stack" />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {skills.map((skillGroup, idx) => (
          <div
            key={skillGroup.name}
            className="animate-stagger-fade rounded-xl border border-border bg-linear-to-br from-card to-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1"
            style={{
              animationDelay: `${(idx + 1) * 0.1}s`,
            }}
          >
            <h3 className="mb-4 text-lg font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {skillGroup.name}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skillGroup.items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="tag-inner-shadow bg-linear-to-r from-secondary/70 to-accent/70 text-white hover:from-secondary hover:to-accent transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
