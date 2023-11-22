'use client';

import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Hero } from './components/hero';
import { Teaching, TeachingProps } from './components/teaching';

import { useHeaderFilled } from '$hooks/use-header-filled';
import { Gallery } from './components/gallery';

export interface HomeTemplateProps {
  introduction: string;
  aboutUs: string;
  teaching: TeachingProps;
}

export function HomeTemplate({
  introduction,
  aboutUs,
  teaching,
}: HomeTemplateProps) {
  useHeaderFilled(false);

  return (
    <>
      <Hero introduction={introduction} />
      <AboutUs text={aboutUs} />
      <Teaching {...teaching} />

      <Blog />

      <Gallery />
    </>
  );
}
