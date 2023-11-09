'use client';

import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { PiCaretRightBold, PiPhoneFill } from 'react-icons/pi';

import eteImg from '$assets/images/ete.jpeg';
import student1Img from '$assets/images/student1.png';
import student2Img from '$assets/images/student2.png';
import { BackgroundVideo } from '$components/background-video';
import { DefaultContainer } from '$components/default-container';
import { NewsLink } from '$components/news-link';

export function HomeTemplate() {
  return (
    <>
      <BackgroundVideo />

      <Flex
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

          <Text maxW="500px" color="gray.300" fontSize="sm">
            Quem gosta de ler não morre só. <br />
            Faça o técnico em lógistica ou desenvolvimento de sistemas na forma
            médio integrado.
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

      <Flex
        as={DefaultContainer}
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
            A 43ª Escola Técnica Estadual (ETE) inaugurada em 5 de julho de
            2018, e a primeira de Garanhuns. Ela é composta por seis blocos
            interligados por passarelas cobertas: auditório, bloco de acesso e
            biblioteca, bloco de serviços e vivência, quadra poliesportiva
            coberta – com vestiários e sala multiuso – laboratórios especiais e
            um bloco pedagógico/administrativo. Este último dividido em 12 salas
            de aula e laboratórios de Biologia, Química, Física, Matemática,
            Línguas e Informática. Que aliada com a excelência pedagógica,
            auxilia os alunos na construção do seu conhecimento de forma
            integral.
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

      <Flex w="full" direction="column" bg="blue.900" minH="100vh"></Flex>

      <Flex w="full" direction="column" py="12">
        <Center flexDir="column">
          <Heading textAlign="left" fontSize="3xl">
            Blog
          </Heading>

          <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
        </Center>

        <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows={{ base: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={{ base: '2', lg: '4' }}
          minH="600px"
          p={{ base: '4', lg: '8' }}
        >
          <GridItem
            gridArea={{ base: 'span 1 / span 12', md: '1 / 1 / 3 / 7' }}
          >
            <NewsLink
              news={{
                title:
                  'Raquel Lira Visita Escola Técnica Estadual Com Seu Novo Programa: Voz do Povo',
                image:
                  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/06/raquel_2.jpg',
                date: '24 de Outubro, 2023',
                link: '/',
              }}
            />
          </GridItem>

          <GridItem
            gridArea={{ base: 'span 1 / span 12', md: '1 / 7 / 2 / 10' }}
          >
            <NewsLink
              isSmall
              news={{
                title:
                  '1° Suassuna + Tec: O Evento Tecnologico da Escola Técnica Estadual',
                image:
                  'https://lh3.googleusercontent.com/p/AF1QipP9DaBrQxeGe9MO79q2cY_r_NGccdAG34AVTHfP=s680-w680-h510',
                date: '24 de Outubro, 2023',
                link: '/',
              }}
            />
          </GridItem>

          <GridItem
            gridArea={{ base: 'span 1 / span 12', md: '1 / 10 / 2 / 13' }}
          >
            <NewsLink
              isSmall
              news={{
                title:
                  'Governo do estado disponibiliza mais 90 vagas para a Escola Técnica Estadual',
                image:
                  'https://lh3.googleusercontent.com/p/AF1QipPsxC86sPlIMrCwOM9CSePDgz4IDWP2_aq0YMUb=s680-w680-h510',
                date: '24 de Outubro, 2023',
                link: '/',
              }}
            />
          </GridItem>

          <GridItem
            gridArea={{ base: 'span 1 / span 12', md: '2 / 7 / 3 / 10' }}
          >
            <NewsLink
              isSmall
              news={{
                title: 'FACEPE aprova 90 vagas para a Escola Técnica Estadual',
                image:
                  'https://confap.org.br/news/wp-content/uploads/2014/07/facepe-e1421169897379.png',
                date: '24 de Outubro, 2023',
                link: '/',
              }}
            />
          </GridItem>

          <GridItem
            gridArea={{ base: 'span 1 / span 12', md: '2 / 10 / 3 / 13' }}
          >
            <NewsLink
              isSmall
              news={{
                title:
                  'Equipe de vôlei da Escola Técnica Estadual conquista prata na copa CMA',
                image:
                  'https://cbv.com.br/img/noticias/2019/maringa-pr-e-vila-velha-es-tambem-receberao-seletiva-para-jovens-do-volei-de-praia.jpg',
                date: '24 de Outubro, 2023',
                link: '/',
              }}
            />
          </GridItem>
        </Grid>
      </Flex>

      <Flex w="full" direction="column" bg="blue.900" minH="100vh"></Flex>
    </>
  );
}
