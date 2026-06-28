import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { contactConfig } from '@/config/Contact';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/contact'),
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

export default function ContactPage() {
  const contactPoints = [
    { label: 'Response', value: 'Fast turnaround' },
    { label: 'Base', value: 'Zaragoza, Spain' },
    { label: 'Collab mode', value: 'Freelance & teams' },
  ];

  return (
    <Container className="py-14">
      <div className="space-y-8">
        <div className="line-grid overflow-hidden rounded-[2rem] border border-primary/15 bg-card/85 p-7 shadow-sm backdrop-blur-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Contact</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-6xl">{contactConfig.title}</h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
                {contactConfig.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactPoints.map((point) => (
                <div key={point.label} className="rounded-2xl border border-border/70 bg-background/70 p-4 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/65">{point.label}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{point.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/15 bg-card/90 p-3 shadow-sm sm:p-5">
          <div className="rounded-[1.4rem] border border-border/60 bg-background/70 p-2 sm:p-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
