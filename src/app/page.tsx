import Container from '@/components/common/Container';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import portfolioData from '@/data/portfolio.json';

export default function Page() {
  const data = portfolioData;

  return (
    <Container className="min-h-screen py-16">
      <HeroSection hero={data.hero} />
      <ServicesSection services={data.services} />
      <ProjectsSection projects={data.projects} />
      <ContactSection contact={data.contact} />
    </Container>
  );
}
