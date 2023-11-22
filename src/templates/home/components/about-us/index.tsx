import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react';
import Markdown from 'react-markdown';

import eteImg from '$assets/images/ete.jpg';

interface AboutUsProps {
  text: string;
}

export function AboutUs({ text }: AboutUsProps) {
  return (
    <Flex
      id="sobre"
      scrollMarginTop="120px"
      flexGrow="1"
      w="full"
      h="full"
      gap="8"
      minH={{ base: '400px', md: '500px' }}
      direction={['column', 'column', 'row']}
    >
      <Center flexDir="column" flex="1" gap="4" p={{ base: '4', md: '8' }}>
        <Center flexDir="column">
          <Heading textAlign="left" fontSize="3xl">
            Sobre Nós
          </Heading>

          <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
        </Center>

        <Box
          as={Markdown}
          sx={{
            p: {
              color: 'gray.900',
              textAlign: { base: 'left', md: 'justify' },
            },
          }}
        >
          {text}
        </Box>
      </Center>

      <Center flex="1" display={{ base: 'none', lg: 'flex' }}>
        <Box w="full" h="full" overflow="hidden">
          <Image
            w="full"
            h="full"
            objectFit="cover"
            filter="auto"
            brightness="0.5"
            alt="Escola Técnica Estadual de Garanhuns"
            src={eteImg.src}
          />
        </Box>
      </Center>
    </Flex>
  );
}
