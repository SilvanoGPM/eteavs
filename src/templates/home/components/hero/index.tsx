import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { PiCaretRightFill, PiPlus } from 'react-icons/pi';
import Markdown from 'react-markdown';

import { BackgroundVideo } from '$components/background-video';
import { DefaultContainer } from '$components/default-container';

import { SlideFade } from '$components/animations/slide-fade';
import { ScrollButton } from '$components/scroll-button';

import student1Img from '$assets/images/student1.png';
import student2Img from '$assets/images/student2.png';

interface HeroProps {
  introduction: string;
}

export function Hero({ introduction }: HeroProps) {
  return (
    <>
      <BackgroundVideo />

      <Flex
        id="home"
        scrollMarginTop="120px"
        as={DefaultContainer}
        flexGrow="1"
        w="full"
        h="full"
        minH={{ base: '90vh', lg: 'calc(100vh - 100px)' }}
        pos="relative"
        align="end"
      >
        <Flex direction="column" gap={['2', '2', '4']} pb={['10', '20']}>
          <SlideFade delay={1000}>
            <Heading color="blue.500" fontWeight="black">
              <Text as="span" fontSize={['md', 'xl']} color="white">
                Escola Técnica Estadual
              </Text>{' '}
              <br />
              Ariano Vilar Suassuna
            </Heading>
          </SlideFade>

          <SlideFade delay={1000}>
            <Box as={Markdown} maxW="500px" color="gray.300" fontSize="sm">
              {introduction}
            </Box>
          </SlideFade>

          <SlideFade delay={1000}>
            <Flex gap="2">
              <ScrollButton
                size={{ base: 'sm', sm: 'md' }}
                dataScroll="sobre"
                variant="customSolid"
                rightIcon={<Icon as={PiPlus} />}
              >
                Saber Mais
              </ScrollButton>

              <Button
                as={Link}
                isExternal
                href="https://sisacad.educacao.pe.gov.br/sissel/"
                size={{ base: 'sm', sm: 'md' }}
                variant="customOutline"
                rightIcon={<Icon as={PiCaretRightFill} />}
              >
                Inscreva-se
              </Button>
            </Flex>
          </SlideFade>
        </Flex>

        <Image
          src={student1Img.src}
          alt="Student"
          pos="absolute"
          zIndex="3"
          right="0"
          bottom={{ base: '-17px', lg: '-27px' }}
          transform="auto"
          scale="0.9"
          maxW={['250px', '250px', '250px', '400px']}
          display={['none', 'none', 'block']}
        />

        <Image
          src={student2Img.src}
          alt="Student"
          pos="absolute"
          zIndex="2"
          right="20"
          maxW={['250px', '250px', '250px', '400px']}
          display={['none', 'none', 'block']}
        />
      </Flex>
    </>
  );
}
