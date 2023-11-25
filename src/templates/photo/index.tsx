'use client';

import { Image } from '$components/image';
import { useHeaderFilled } from '$hooks/use-header-filled';
import { Box, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { PiCalendarBlank, PiMagnifyingGlassPlusFill } from 'react-icons/pi';

import { Fade } from '$components/animations/fade';
import 'yet-another-react-lightbox/styles.css';
import { PhotoLightbox } from './photo-lightbox';

export interface Photo {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  images: string[];
}

export interface PhotoTemplateProps {
  photo: Photo;
}

export function PhotoTemplate({ photo }: PhotoTemplateProps) {
  useHeaderFilled(true);

  const [currentImageIndex, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsViewerOpen] = useState(false);

  const openLightbox = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Flex h="50px" w="full" display={{ base: 'block', lg: 'none' }} />

      <Flex
        direction="column"
        maxW="1400px"
        mx="auto"
        w="full"
        py="16"
        px={{ base: '4', md: '8', lg: '16' }}
      >
        <Flex direction="column" mb="4">
          <Fade delay={300}>
            <Heading maxW="100%" fontSize="2xl" title={photo.title}>
              {photo.title}
            </Heading>
          </Fade>

          <Fade delay={500}>
            <Text color="gray.500" mt="2">
              {photo.description}
            </Text>
          </Fade>

          <Fade delay={700}>
            <Text
              as="time"
              color="gray700"
              mb="2"
              mt="4"
              fontSize="md"
              display="flex"
              alignItems="center"
            >
              <Icon as={PiCalendarBlank} mr="1" /> {photo.createdAt}
            </Text>
          </Fade>
        </Flex>

        <SimpleGrid
          w="full"
          spacing={4}
          minChildWidth={{ base: '220px', sm: '320px' }}
          justifyItems="center"
        >
          {photo.images.map((image, index) => (
            <Box
              key={image}
              as={Fade}
              fraction={0}
              delay={index > 2 ? 0 : 500 * (index + 1) * 0.5}
              h={{ base: '320px', sm: '420px' }}
              w="100%"
            >
              <Box
                onClick={() => openLightbox(index)}
                pos="relative"
                h={{ base: '320px', sm: '420px' }}
                w="full"
                role="group"
                cursor="pointer"
              >
                <Icon
                  as={PiMagnifyingGlassPlusFill}
                  pos="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="1"
                  color="white"
                  fontSize="6xl"
                  opacity="0"
                  transition="0.2s ease-in-out"
                  _groupHover={{
                    opacity: 1,
                  }}
                />

                <Image
                  src={image}
                  alt={`Foto ${index} - ${photo.title}`}
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  w="full"
                  h="full"
                  objectFit="cover"
                  filter="auto"
                  transition="0.2s ease-in-out"
                  _groupHover={{
                    brightness: '0.5',
                  }}
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <PhotoLightbox
          images={photo.images}
          isOpen={isLightboxOpen}
          index={currentImageIndex}
          onClose={closeLightbox}
        />
      </Flex>
    </>
  );
}
