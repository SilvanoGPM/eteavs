'use client';

import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Hero } from './components/hero';
import { Teaching } from './components/teaching';

import { Gallery } from './components/gallery';

export function HomeTemplate() {
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
