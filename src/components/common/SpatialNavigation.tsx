'use client';

import { BriefcaseBusiness, Home, Layers3, Mail, Sparkles } from 'lucide-react';
import { useLenis } from 'lenis/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, type MouseEvent } from 'react';

import styles from './SpatialNavigation.module.css';

const navigation = [
  { label: 'Overview', href: '/#home', icon: Home },
  { label: 'Services', href: '/#services', icon: BriefcaseBusiness },
  { label: 'Projects', href: '/#projects', icon: Layers3 },
  { label: 'Contact', href: '/#contact', icon: Mail },
];

export default function SpatialNavigation() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (pathname !== '/') return;

    const scrollToHash = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: -112, immediate: true });
      } else {
        target.scrollIntoView();
      }
    };

    const frame = requestAnimationFrame(scrollToHash);
    window.addEventListener('popstate', scrollToHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('popstate', scrollToHash);
    };
  }, [pathname, lenis]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      pathname !== '/' ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const target = document.getElementById(href.split('#')[1]);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, '', href);
    if (lenis) {
      lenis.scrollTo(target, { offset: -112, immediate: true });
    } else {
      target.scrollIntoView();
    }
  };

  return (
    <nav className={styles.dock} aria-label="Portfolio shortcuts">
      <Link href="/#home" scroll={false} onClick={(event) => handleClick(event, '/#home')} aria-label="Go to overview" className={`${styles.link} ${styles.brand}`}>
        <Sparkles size={19} aria-hidden="true" />
      </Link>
      <span className={styles.divider} aria-hidden="true" />
      {navigation.map(({ label, href, icon: Icon }) => (
        <Link key={label} href={href} scroll={false} onClick={(event) => handleClick(event, href)} aria-label={label} title={label} className={styles.link}>
          <Icon size={19} aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
}
