import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

import { BlogCard } from '../blog/BlogCard';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
    // Blog deshabilitado temporalmente
    return null;
    </Container>
  );
}
