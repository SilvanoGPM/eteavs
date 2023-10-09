'use client';

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { PiCaretRightBold, PiPhoneFill } from 'react-icons/pi';

import eteImg from '$assets/images/ete.jpeg';
import studentImg from '$assets/images/student.png';
import { BackgroundVideo } from '$components/background-video';
import { EventModal } from '$components/event-modal';

export function HomeTemplate() {
  return (
    <>
      <EventModal />
      <BackgroundVideo />

      <Flex
        flexGrow="1"
        w="full"
        h="full"
        minH={{ base: '100vh', lg: 'calc(100vh - 100px)' }}
        pos="relative"
        align="end"
      >
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
            <Button
              variant="customSolid"
              rightIcon={<Icon as={PiCaretRightBold} />}
            >
              Saber Mais
            </Button>

            <Button
              variant="customOutline"
              rightIcon={<Icon as={PiPhoneFill} />}
            >
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

      <Flex
        w="full"
        minH="400px"
        gap="8"
        direction={['column', 'column', 'row']}
      >
        <Center flexDir="column" flex="1" gap="4">
          <Center flexDir="column">
            <Heading textAlign="left" textTransform="uppercase" fontSize="3xl">
              Sobre Nós
            </Heading>

            <Box w="50%" h="4px" bg="yellow.500" rounded="full" />
          </Center>

          <Text color="gray.900" textAlign="justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            facilis iste debitis rerum eius officia magnam corporis nobis.
            Numquam, deleniti quia expedita accusantium facere doloribus error
            quas iure laborum excepturi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt in nostrum non consectetur accusamus
            ipsum temporibus cupiditate aut ipsam rerum possimus quasi
            blanditiis eveniet tempora dolores expedita perferendis, officiis
            impedit!
          </Text>
        </Center>

        <Center flex="1">
          <Box w="full" rounded="2xl" overflow="hidden">
            <Image
              rounded="lg"
              filter="auto"
              brightness="0.5"
              alt="Escola Técnica Estadual de Garanhuns"
              src={eteImg.src}
            />
          </Box>
        </Center>
      </Flex>
    </>
  );
}
