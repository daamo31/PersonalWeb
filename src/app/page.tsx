import Container from '@/components/common/Container';
import Experience from '@/components/landing/Experience';
import FloatingSkills from '@/components/landing/FloatingSkills';
import Hero from '@/components/landing/Hero';
import LatestArticles from '@/components/landing/LatestArticles';
import Work from '@/components/landing/Projects';
import TechStack from '@/components/landing/TechStack';
import Services from '@/components/landing/Services';
import React from 'react';

export default function page() {
  return (
    <>
      <FloatingSkills />
      <Container className="min-h-screen py-16">
        <Hero />
        <Experience />
        <Work />
        <TechStack />
        <Services />
        <LatestArticles />
      </Container>
    </>
  );
}
