import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { PiCaretRightBold, PiPhoneFill } from 'react-icons/pi';
import Markdown from 'react-markdown';

import { BackgroundVideo } from '$components/background-video';
import { DefaultContainer } from '$components/default-container';

import student1Img from '$assets/images/student1.png';
import student2Img from '$assets/images/student2.png';
import { ScrollButton } from '$components/scroll-button';

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
        minH={{ base: '100vh', lg: 'calc(100vh - 100px)' }}
        pos="relative"
        align="end"
      >
        <Flex direction="column" gap={['2', '2', '4']} pb={['10', '20']}>
          <Heading color="blue.500" fontWeight="black">
            <Text as="span" fontSize={['md', 'xl']} color="white">
              Escola Técnica Estadual
            </Text>{' '}
            <br />
            Ariano Vilar Suassuna
          </Heading>

          <Box as={Markdown} maxW="500px" color="gray.300" fontSize="sm">
            {introduction}
          </Box>

          <Flex gap="2">
            <ScrollButton
              size={{ base: 'sm', sm: 'md' }}
              dataScroll="sobre"
              variant="customSolid"
              rightIcon={<Icon as={PiCaretRightBold} />}
            >
              Saber Mais
            </ScrollButton>

            <ScrollButton
              dataScroll="contanto"
              size={{ base: 'sm', sm: 'md' }}
              variant="customOutline"
              rightIcon={<Icon as={PiPhoneFill} />}
            >
              Contato
            </ScrollButton>
          </Flex>
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
