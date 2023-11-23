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

import { News, NewsLink } from '$components/news-link';
import Link from 'next/link';

interface BlogProps {
  news: News[];
}

export function Blog({ news }: BlogProps) {
  const [first, second, thrid, fourth, fifth] = news;

  return (
    <Flex id="blog" scrollMarginTop="120px" w="full" direction="column" py="12">
      <Center flexDir="column">
        <Heading textAlign="left" fontSize="3xl">
          Blog
        </Heading>

        <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
      </Center>

      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows={{ base: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={{ base: '2', lg: '4' }}
        minH="600px"
        p={{ base: '4', lg: '8' }}
      >
        <GridItem gridArea={{ base: 'span 1 / span 12', md: '1 / 1 / 3 / 7' }}>
          <NewsLink news={first} />
        </GridItem>

        <GridItem gridArea={{ base: 'span 1 / span 12', md: '1 / 7 / 2 / 10' }}>
          <NewsLink isSmall news={second} />
        </GridItem>

        <GridItem
          gridArea={{ base: 'span 1 / span 12', md: '1 / 10 / 2 / 13' }}
        >
          <NewsLink isSmall news={thrid} />
        </GridItem>

        <GridItem gridArea={{ base: 'span 1 / span 12', md: '2 / 7 / 3 / 10' }}>
          <NewsLink isSmall news={fourth} />
        </GridItem>

        <GridItem
          gridArea={{ base: 'span 1 / span 12', md: '2 / 10 / 3 / 13' }}
        >
          <NewsLink isSmall news={fifth} />
        </GridItem>

        <GridItem colSpan={12}>
          <Flex justify="center" w="full" mt={8}>
            <Button
              as={Link}
              colorScheme="blue"
              href="/blog"
              variant="outline"
              rightIcon={<Icon as={PiCaretRightBold} />}
            >
              Ver Mais
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
