'use client';

import { ReactNode } from 'react';

import { Box, Icon, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import logoImg from '$assets/images/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export function Footer() {
  return (
    <Box
      as="footer"
      bgGradient="linear(blue.900, blue.500)"
      color="white"
      mt="8"
    >
      <Stack py="10" px={['4', '4', '8']}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                alt="Letras E T E, acrônimo para escola técnica estadual com fundo azul."
                w="120px"
                src={logoImg.src}
              />
            </Box>

            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} ETE AVS. Todos os direitos reservdos
            </Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Sobre</ListHeader>

            <Box as="a" href={'#'}>
              Escola
            </Box>

            <Box as="a" href={'#'}>
              Localização
            </Box>

            <Box as="a" href={'#'}>
              Ensino
            </Box>

            <Box as="a" href={'#'}>
              Estrutura
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Cursos</ListHeader>

            <Box as="a" href={'#'}>
              Des. de Sistemas
            </Box>

            <Box as="a" href={'#'}>
              Logística
            </Box>

            <Box as="a" href={'#'}>
              EAD
            </Box>

            <Box as="a" href={'#'}>
              Subsequente
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Redes Sociais</ListHeader>
            <Box as="a" href={'#'}>
              <Icon as={FaFacebook} mr="1" /> Facebook
            </Box>

            <Box as="a" href={'#'}>
              <Icon as={FaInstagram} mr="1" /> Instagram
            </Box>

            <Box as="a" href={'#'}>
              <Icon as={FaLinkedin} mr="1" />
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
