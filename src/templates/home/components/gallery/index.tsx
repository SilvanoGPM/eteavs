import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';

import Wave from 'react-wavify';

import { Fade } from '$components/animations/fade';
import { SlideFade } from '$components/animations/slide-fade';
import { Photo, PhotoLink } from '$components/photo-link';
import Link from 'next/link';
import { PiCaretRightBold } from 'react-icons/pi';

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
        pb="8"
        mb="12"
      >
        <Box pos="absolute" left="0" right="0" top="-12" zIndex="-1">
          <Wave fill="var(--chakra-colors-blue-900)" />
        </Box>

        <Box
          pos="absolute"
          left="0"
          right="0"
          bottom="-12"
          zIndex="-1"
          transform="scaleY(-1)"
        >
          <Wave fill="var(--chakra-colors-blue-900)" />
        </Box>

        <SlideFade delay={200} direction="down">
          <Center flexDir="column" color="white" mb="8" mt="16">
            <Heading textAlign="left" fontSize="3xl">
              Galeria
            </Heading>

            <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
          </Center>
        </SlideFade>

        <SimpleGrid
          w="full"
          px="4"
          spacing={0}
          minChildWidth={{ base: '220px', sm: '320px' }}
          justifyItems="center"
        >
          {photos.map((photo, index) => (
            <Box
              as={Fade}
              fraction={0}
              key={photo.slug}
              delay={500 * (index + 1) * 0.5}
              h={{ base: '320px', sm: '420px' }}
              w="100%"
            >
              <PhotoLink photo={photo} />
            </Box>
          ))}
        </SimpleGrid>

        <Flex justify="center" w="full" mt={12}>
          <Fade delay={1000}>
            <Button
              as={Link}
              borderColor="white"
              color="white"
              href="/galeria"
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
          </Fade>
        </Flex>
      </Flex>
    </>
  );
}
