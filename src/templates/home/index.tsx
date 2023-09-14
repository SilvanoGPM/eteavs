'use client';

import { Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { PiCaretRightBold, PiPhoneFill } from 'react-icons/pi';

import studentImg from '$assets/images/student.png';
import { BackgroundVideo } from '$components/background-video';

export function HomeTemplate() {
  return (
    <>
      <BackgroundVideo />

      <Flex flexGrow="1" w="full" pos="relative" align="end">
        <Flex direction="column" gap={['2', '2', '4']} pb={['10', '20']}>
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
        </Flex>

        <Image
          src={studentImg.src}
          alt="Student"
          pos="absolute"
          zIndex="2"
          right="0"
          maxW={['250px', '250px', '250px', '400px']}
          display={['none', 'none', 'block']}
        />
      </Flex>
    </>
  );
}
