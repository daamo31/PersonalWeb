import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { Separator } from '@/components/ui/separator';
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
  return (
    <Container className="py-14">
      <div className="space-y-8">
        <div className="line-grid rounded-3xl border border-primary/15 bg-card/80 p-7 text-center backdrop-blur-md sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Contact</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-6xl">
            {contactConfig.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {contactConfig.description}
          </p>
        </div>
        <Separator />

        <div className="mx-auto max-w-3xl rounded-3xl border border-primary/15 bg-card/90 p-2 sm:p-4">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
