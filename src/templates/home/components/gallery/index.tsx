import { Box, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import Wave from 'react-wavify';

import { Photo, PhotoLink } from '$components/photo-link';

interface GalleryProps {
  photos: Photo[];
}

export function Gallery({ photos }: GalleryProps) {
  return (
    <>
      <Flex
        id="galeria"
        scrollMarginTop="120px"
        w="full"
        direction="column"
        bg="blue.900"
        minH="100vh"
        pos="relative"
        pb="32"
        mb="12"
      >
        <Box pos="absolute" left="0" right="0" top="-12" zIndex="-1">
          <Wave fill="var(--chakra-colors-blue-900)" />
        </Box>

        <Box
          pos="absolute"
          left="0"
          right="0"
          bottom="-10"
          zIndex="1"
          transform="scaleY(-1)"
        >
          <Wave fill="var(--chakra-colors-blue-900)" />
        </Box>

        <Center flexDir="column" color="white" mb="8" mt="16">
          <Heading textAlign="left" fontSize="3xl">
            Galeria
          </Heading>

          <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
        </Center>

        <SimpleGrid
          w="full"
          px="4"
          spacing={0}
          minChildWidth={{ base: '220px', sm: '320px' }}
          justifyItems="center"
        >
          {photos.map((photo) => (
            <PhotoLink key={photo.slug} photo={photo} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
