import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-4 z-20 py-4">
      <div className="rounded-3xl border border-border/60 bg-background/75 px-4 py-3 shadow-lg backdrop-blur-xl sm:rounded-full sm:px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                className="h-11 w-11 rounded-full border border-border/70 bg-primary/10 p-1.5 transition-transform duration-300 hover:scale-95"
                src={navbarConfig.logo.src}
                alt={navbarConfig.logo.alt}
                width={navbarConfig.logo.width}
                height={navbarConfig.logo.height}
              />
            </Link>
            <div className="hidden items-center gap-2 md:flex">
              {navbarConfig.navItems.map((item) => (
                <Link
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-foreground"
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80 sm:inline-flex">
              Open for work
            </span>
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto md:hidden">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="shrink-0 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
