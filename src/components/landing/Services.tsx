import { services } from '@/config/Services';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import React from 'react';

export default function Services() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="What I Offer" heading="Services" />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">{service.icon}</div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
