import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import Wave from 'react-wavify';

import { TeachingCard } from '$components/teaching-card';
import { thinScrollbar } from '$styles/tokens';

import eadImg from '$assets/images/ead.jpeg';
import emImg from '$assets/images/em.jpeg';
import subsequenteImg from '$assets/images/subsequente.jpeg';
import { Markdown } from '$components/markdown';
import { Fade } from '$components/animations/fade';
import { SlideFade } from '$components/animations/slide-fade';

export interface TeachingOption {
  resume: string;
  full: string;
}

export interface TeachingProps {
  em: TeachingOption;
  sub: TeachingOption;
  ead: TeachingOption;
}

export function Teaching({ em, sub, ead }: TeachingProps) {
  return (
    <Flex
      id="ensino"
      scrollMarginTop="120px"
      w="full"
      flexDir="column"
      bg="blue.900"
      py="8"
      minH="100vh"
      pos="relative"
    >
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

      <Fade delay={500}>
        <Center flexDir="column" mb="8" mt="8">
          <Heading textAlign="center" color="white" fontSize="3xl">
            Segmentos de Ensino
          </Heading>

          <Box w="100px" h="4px" bg="yellow.500" rounded="full" />
        </Center>
      </Fade>

      <Flex
        justify={{ base: 'start', lg: 'center' }}
        gap={{ base: '6', md: '8', lg: '12' }}
        p="4"
        bg="blue.900"
        pos="relative"
        overflowX="auto"
        overflowY="hidden"
        sx={thinScrollbar}
      >
        <SlideFade delay={500} direction="up">
          <TeachingCard
            image={emImg.src}
            title="Ensino médio integrado"
            description={em.resume}
            body={<Markdown>{em.full}</Markdown>}
          />
        </SlideFade>

        <SlideFade delay={700} direction="up">
          <TeachingCard
            image={subsequenteImg.src}
            title="Subsequente"
            description={sub.resume}
            body={<Markdown>{sub.full}</Markdown>}
          />
        </SlideFade>

        <SlideFade delay={900} direction="up">
          <TeachingCard
            image={eadImg.src}
            title="Ensino a distância"
            description={ead.resume}
            body={<Markdown>{ead.full}</Markdown>}
          />
        </SlideFade>
      </Flex>
    </Flex>
  );
}
