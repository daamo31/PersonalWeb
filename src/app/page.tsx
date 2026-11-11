import SpatialHome from '@/components/landing/SpatialHome';
import { featuredProjects } from '@/config/Projects';
import { heroConfig } from '@/config/Hero';
import portfolioData from '@/data/portfolio.json';
import { JsonLd } from '@/components/seo/JsonLd';

export default function Page() {
  const data = portfolioData;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: heroConfig.name,
    jobTitle: heroConfig.title,
    url: 'https://danieldelamo.dev',
    sameAs: [
      'https://www.linkedin.com/in/danieldelamotarrero/',
      'https://github.com/daamo31',
    ],
    image: 'https://danieldelamo.dev/assets/avatar.jpg',
    description:
      'Full Stack Developer and Automation Specialist focused on scalable products, UX and modern web engineering.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: heroConfig.name,
    url: 'https://danieldelamo.dev',
    description:
      'Portfolio and personal website of Daniel Del Amo featuring projects, services, and engineering notes.',
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: heroConfig.name,
    },
  };

  const projects = featuredProjects.slice(0, 3).map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies.slice(0, 3).map(({ name }) => name),
    live: project.live || undefined,
    website: project.website,
    detailsHref: project.details ? project.projectDetailsPageSlug : undefined,
    github: project.github || undefined,
  }));

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <SpatialHome
        name={heroConfig.name}
        title={heroConfig.title}
        avatar={heroConfig.avatar}
        headline={data.hero.headline}
        summary={data.hero.summary}
        primaryCta={data.hero.primaryCta}
        badges={data.hero.badges}
        services={data.services.map(({ id, title, description }) => ({
          id,
          title,
          description,
        }))}
        projects={projects}
        contact={data.contact}
      />
    </>
  );
}
