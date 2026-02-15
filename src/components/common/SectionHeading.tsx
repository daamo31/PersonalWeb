import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="animate-fade-in-blur flex items-start gap-4">
      {/* Decorative gradient line */}
      <div className="mt-1 flex flex-col gap-2">
        <div className="h-12 w-1 rounded-full bg-linear-to-b from-secondary via-accent to-transparent" />
        <div className="h-1 w-6 bg-linear-to-r from-primary to-secondary rounded-full" />
      </div>

      {/* Heading content */}
      <div className="flex-1">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary/80 mb-1">
          {subHeading}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight relative inline-block">
          {heading}
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-secondary via-accent to-primary rounded-full transition-all duration-700 group-hover:w-full" />
        </h2>
      </div>
    </div>
  );
}
