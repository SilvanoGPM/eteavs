import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

import eteImg from '$assets/images/ete.jpeg';
import { DefaultContainer } from '$components/default-container';

export function AboutUs() {
  return (
    <Flex
      as={DefaultContainer}
      data-scroll="about-us"
      scrollMarginTop={{ base: '20px', md: '120px' }}
      w="full"
      minH={{ base: '400px', md: '500px' }}
      gap="8"
      direction={['column', 'column', 'row']}
    >
      <Center flexDir="column" flex="1" gap="4">
        <Center flexDir="column">
          <Heading textAlign="left" fontSize="3xl">
            Sobre Nós
          </Heading>

          <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
        </Center>

        <Text color="gray.900" textAlign="justify">
          A 43ª Escola Técnica Estadual (ETE) inaugurada em 5 de julho de 2018,
          e a primeira de Garanhuns. Ela é composta por seis blocos interligados
          por passarelas cobertas: auditório, bloco de acesso e biblioteca,
          bloco de serviços e vivência, quadra poliesportiva coberta – com
          vestiários e sala multiuso – laboratórios especiais e um bloco
          pedagógico/administrativo. Este último dividido em 12 salas de aula e
          laboratórios de Biologia, Química, Física, Matemática, Línguas e
          Informática. Que aliada com a excelência pedagógica, auxilia os alunos
          na construção do seu conhecimento de forma integral.
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
  );
}
