import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container className="mt-20 relative">
      {/* Background accent */}
      <div className="absolute -right-40 top-20 w-80 h-80 bg-linear-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl -z-10" />

      <div className="group">
        <SectionHeading subHeading="Featured" heading="Experience" />
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {experiences.slice(0, 2).map((experience: Experience, idx) => (
          <div
            key={experience.company}
            className="animate-stagger-fade"
            style={{
              animationDelay: `${(idx + 1) * 0.1}s`,
            }}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="bg-linear-to-r from-secondary/10 to-accent/10 border-2 border-secondary hover:border-primary hover:bg-linear-to-r hover:from-secondary/20 hover:to-accent/20 transition-all duration-300"
        >
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
