'use client';

import { DefaultContainer } from '$components/default-container';
import { NewsLink } from '$components/news-link';
import { useHeaderFilled } from '$hooks/use-header-filled';
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

export function BlogTemplate() {
  useHeaderFilled(true);

  return (
    <>
      <Flex
        as={DefaultContainer}
        direction="column"
        mx="auto"
        w="full"
        py="16"
        px={{ base: '4' }}
      >
        <Heading maxW="100%" fontSize="2xl" textAlign="center" mb="8">
          Blog
        </Heading>

        <SimpleGrid
          w="full"
          px="4"
          spacing={4}
          minChildWidth={{ base: '220px', sm: '320px' }}
          justifyItems="center"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <Box
              key={id}
              pos="relative"
              h={{ base: '220px', sm: '320px' }}
              w="full"
              role="group"
              cursor="pointer"
            >
              <NewsLink
                news={{
                  title:
                    'Raquel Lira Visita Escola Técnica Estadual Com Seu Novo Programa: Voz do Povo',
                  image: `https://picsum.photos/seed/${id}/200/300`,
                  date: '24 de Outubro, 2023',
                  link: '/',
                }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
