import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

import eteImg from '$assets/images/ete.jpg';

export function AboutUs() {
  return (
    <Flex
      data-scroll="about-us"
      scrollMarginTop={{ base: '20px', md: '120px' }}
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
