import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { PiCaretRightBold } from 'react-icons/pi';

import { SlideFade } from '$components/animations/slide-fade';
import { News, NewsLink } from '$components/news-link';
import Link from 'next/link';
import { Fade } from '$components/animations/fade';

interface BlogProps {
  news: News[];
}

export function Blog({ news }: BlogProps) {
  const [first, second, thrid, fourth, fifth] = news;

  return (
    <Flex
      id="blog"
      scrollMarginTop="120px"
      w="full"
      direction="column"
      pt="20"
      pb="12"
    >
      <SlideFade delay={200} direction="down">
        <Center flexDir="column">
          <Heading textAlign="left" fontSize="3xl">
            Blog
          </Heading>

          <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
        </Center>
      </SlideFade>

      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows={{ base: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={{ base: '2', lg: '4' }}
        minH="600px"
        p={{ base: '4', lg: '8' }}
      >
        <GridItem gridArea={{ base: 'span 1 / span 12', md: '1 / 1 / 3 / 7' }}>
          <SlideFade
            delay={300}
            style={{ width: '100%', height: '100%', flex: '1', flexGrow: '1' }}
          >
            <NewsLink news={first} />
          </SlideFade>
        </GridItem>

        <GridItem gridArea={{ base: 'span 1 / span 12', md: '1 / 7 / 2 / 10' }}>
          <SlideFade
            delay={500}
            direction="down"
            style={{ width: '100%', height: '100%', flex: '1', flexGrow: '1' }}
          >
            <NewsLink isSmall news={second} />
          </SlideFade>
        </GridItem>

        <GridItem
          gridArea={{ base: 'span 1 / span 12', md: '1 / 10 / 2 / 13' }}
        >
          <SlideFade
            delay={700}
            direction="down"
            style={{ width: '100%', height: '100%', flex: '1', flexGrow: '1' }}
          >
            <NewsLink isSmall news={thrid} />
          </SlideFade>
        </GridItem>

        <GridItem gridArea={{ base: 'span 1 / span 12', md: '2 / 7 / 3 / 10' }}>
          <SlideFade
            delay={500}
            direction="up"
            style={{ width: '100%', height: '100%', flex: '1', flexGrow: '1' }}
          >
            <NewsLink isSmall news={fourth} />
          </SlideFade>
        </GridItem>

        <GridItem
          gridArea={{ base: 'span 1 / span 12', md: '2 / 10 / 3 / 13' }}
        >
          <SlideFade
            delay={700}
            direction="up"
            style={{ width: '100%', height: '100%', flex: '1', flexGrow: '1' }}
          >
            <NewsLink isSmall news={fifth} />
          </SlideFade>
        </GridItem>

        <GridItem colSpan={12}>
          <Fade
            delay={200}
            style={{ width: '100%', height: '100%', flex: '1', flexGrow: '1' }}
          >
            <Flex justify="center" w="full" mt={8}>
              <Button
                as={Link}
                colorScheme="blue"
                href="/blog"
                variant="outline"
                filter="auto"
                _hover={{
                  brightness: '0.8',
                }}
                _active={{
                  brightness: '0.8',
                }}
                rightIcon={<Icon as={PiCaretRightBold} />}
              >
                Ver Mais
              </Button>
            </Flex>
          </Fade>
        </GridItem>
      </Grid>
    </Flex>
  );
}
