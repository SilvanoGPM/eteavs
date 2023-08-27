'use client';

import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

import { BackgroundVideo } from '$components/background-video';
import studentImg from '$assets/images/student.png';

export function HomeTemplate() {
  return (
    <>
      <BackgroundVideo />

      <Box
        pos="absolute"
        w="full"
        zIndex="1"
        bottom="0"
        left="0"
        pb={['10', '20']}
        color="white"
        overflow="hidden"
      >
        <Flex
          w="full"
          maxW="1200px"
          mx="auto"
          align="start"
          direction="column"
          gap={['2', '2', '4']}
          px="8"
        >
          <Heading textTransform="uppercase" color="yellow.500">
            <Text as="span" fontSize={['md', 'xl']} color="white">
              Escola Técnica Estadual
            </Text>{' '}
            <br />
            Ariano Vilar Suassuna
          </Heading>

          <Text maxW="500px" color="gray.300" fontSize="sm" textAlign="justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            voluptatibus, fugit nulla doloribus saepe deserunt eveniet corrupti
            consequatur expedita maxime, mollitia optio veritatis ducimus vero
            repudiandae ullam quasi distinctio. Fuga.
          </Text>

          <Flex gap="2">
            <Button>Conhecer Mais</Button>
            <Button variant="outline">Contato</Button>
          </Flex>
        </Flex>
      </Box>

      <Image
        src={studentImg.src}
        alt="Student"
        pos="absolute"
        zIndex="2"
        bottom="0"
        right="0"
        mr="8"
        maxW={['300px', '250px', '250px', '400px']}
        display={['none', 'none', 'block']}
      />
    </>
  );
}