'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';

import { PiCaretRightBold, PiPhoneFill } from 'react-icons/pi';

import studentImg from '$assets/images/student.png';
import { BackgroundVideo } from '$components/background-video';

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
        py={['10', '20']}
        color="white"
        overflow="hidden"
      >
        <Flex
          direction="column"
          pos="relative"
          w="full"
          h="full"
          maxW="1200px"
          align="start"
          mx="auto"
          px="8"
          gap={['2', '2', '4']}
        >
          <Heading textTransform="uppercase" color="blue.500">
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
            <Button rightIcon={<Icon as={PiCaretRightBold} />}>
              Saber Mais
            </Button>

            <Button variant="outline" rightIcon={<Icon as={PiPhoneFill} />}>
              Contato
            </Button>
          </Flex>

          <Image
            src={studentImg.src}
            alt="Student"
            pos="absolute"
            zIndex="2"
            bottom={['-10', '-20']}
            right="0"
            maxW={['250px', '250px', '250px', '400px']}
            display={['none', 'none', 'block']}
          />
        </Flex>
      </Box>
    </>
  );
}
