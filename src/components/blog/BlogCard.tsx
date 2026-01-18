import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BlogPostPreview } from '@/types/blog';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  // Blog deshabilitado temporalmente
  return null;
}
