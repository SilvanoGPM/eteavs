'use client';

import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Hero } from './components/hero';
import { Teaching, TeachingProps } from './components/teaching';

import { useHeaderFilled } from '$hooks/use-header-filled';
import { Gallery } from './components/gallery';
import { News } from '$components/news-link';

export interface HomeTemplateProps {
  introduction: string;
  aboutUs: string;
  teaching: TeachingProps;
  news: News[];
}

export function HomeTemplate({
  introduction,
  aboutUs,
  teaching,
  news,
}: HomeTemplateProps) {
  useHeaderFilled(false);

  return (
    <>
      <Hero introduction={introduction} />
      <AboutUs text={aboutUs} />
      <Teaching {...teaching} />

      <Blog news={news} />

      <Gallery />
    </>
  );
}
