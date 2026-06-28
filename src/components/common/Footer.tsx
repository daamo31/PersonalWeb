import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="pb-10 pt-16">
      <div className="line-grid rounded-3xl border border-primary/15 bg-card/85 px-6 py-6 text-center shadow-sm backdrop-blur-md sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
          Design and Development
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Crafted by <span className="font-semibold text-foreground">Daniel Del Amo</span>
          {' '}with a focus on clarity, performance, and conversion.
        </p>
      </div>
    </Container>
  );
}
