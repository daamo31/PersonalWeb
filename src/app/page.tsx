import Container from '@/components/common/Container';
import Experience from '@/components/landing/Experience';
import FloatingSkills from '@/components/landing/FloatingSkills';
import ArticlesSidebar from '@/components/landing/ArticlesSidebar';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import TechStack from '@/components/landing/TechStack';
import Services from '@/components/landing/Services';
import React from 'react';

export default function page() {
  return (
    <>
      <FloatingSkills />
      <ArticlesSidebar />
      <Container className="min-h-screen py-16">
        <Hero />
        <Experience />
        <Work />
        <TechStack />
        <Services />
      </Container>
    </>
  );
}
