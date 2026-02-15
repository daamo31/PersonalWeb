import { services } from '@/config/Services';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import React from 'react';

export default function Services() {
  return (
    <Container className="mt-20 relative">
      {/* Background pattern lines */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="group">
        <SectionHeading subHeading="What I Offer" heading="Services" />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="animate-stagger-fade group relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-card via-card to-card/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-secondary hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-2"
            style={{
              animationDelay: `${(idx + 1) * 0.1}s`,
            }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-linear-to-r from-secondary/0 via-secondary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br from-secondary/20 to-accent/20 text-3xl group-hover:from-secondary/40 group-hover:to-accent/40 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              {service.description}
            </p>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-secondary/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:from-secondary/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </Container>
  );
}
