'use client';

import { Flex } from '@chakra-ui/react';

import { AboutUs } from './components/about-us';
import { Blog } from './components/blog';
import { Hero } from './components/hero';
import { Gallery } from './components/gallery';

export function HomeTemplate() {
  return (
    <>
      <Hero />
      <AboutUs />

      <Flex w="full" direction="column" bg="blue.900" minH="100vh"></Flex>

      <Blog />

      <Gallery />
    </>
  );
}
