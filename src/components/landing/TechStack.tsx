import { skills } from '@/config/SkillsEducation';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import React from 'react';
import { Badge } from '../ui/badge';

export default function TechStack() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="My Arsenal" heading="Tech Stack" />
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.name}
            className="rounded-lg border border-border bg-card p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {skillGroup.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="tag-inner-shadow bg-secondary/80 text-secondary-foreground hover:bg-secondary"
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
