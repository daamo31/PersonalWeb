import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="pb-10 pt-16">
      <div className="line-grid rounded-2xl border border-primary/15 bg-card/80 px-6 py-5 text-center backdrop-blur-md">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
          Design and Development
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Crafted by <span className="font-semibold text-foreground">Daniel Del Amo</span>
        </p>
      </div>
    </Container>
  );
}
