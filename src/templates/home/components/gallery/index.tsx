import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

import Wave from 'react-wavify';

import { PiCameraPlus } from 'react-icons/pi';

export function Gallery() {
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => (
            <Box
              key={id}
              pos="relative"
              h={{ base: '320px', sm: '420px' }}
              w="full"
              role="group"
              cursor="pointer"
            >
              <Icon
                as={PiCameraPlus}
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
                pos="absolute"
                top="0"
                bottom="0"
                left="0"
                right="0"
                w="full"
                h="full"
                src={`https://picsum.photos/seed/${id}/200/300`}
                objectFit="cover"
                filter="auto"
                transition="0.2s ease-in-out"
                brightness="0.5"
                _groupHover={{
                  brightness: '0.6',
                }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
