import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { PiCaretRightBold } from 'react-icons/pi';

import { NewsLink } from '$components/news-link';
import Link from 'next/link';

export function Blog() {
  return (
    <Flex
      id="blog"
      scrollMarginTop={{ base: '20px', md: '120px' }}
      w="full"
      direction="column"
      py="12"
    >
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
        <GridItem gridArea={{ base: 'span 1 / span 12', md: '1 / 1 / 3 / 7' }}>
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

        <GridItem gridArea={{ base: 'span 1 / span 12', md: '1 / 7 / 2 / 10' }}>
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

        <GridItem gridArea={{ base: 'span 1 / span 12', md: '2 / 7 / 3 / 10' }}>
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

        <GridItem colSpan={12}>
          <Flex justify="center" w="full" mt={8}>
            <Button
              as={Link}
              colorScheme="blue"
              href="/blog"
              variant="outline"
              rightIcon={<Icon as={PiCaretRightBold} />}
            >
              Ver Mais
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
