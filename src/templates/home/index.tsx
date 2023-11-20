'use client';

import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Hero } from './components/hero';
import { Teaching } from './components/teaching';

import { useHeaderFilled } from '$hooks/use-header-filled';
import { Gallery } from './components/gallery';

export function HomeTemplate() {
  useHeaderFilled(false);

  return (
    <>
      <Hero />
      <AboutUs />
      <Teaching />

      <Blog />

      <Gallery />
    </>
  );
}
