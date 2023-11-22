'use client';

import { ReactNode } from 'react';

import {
  Box,
  Center,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link as NextLink } from '@chakra-ui/next-js';

import logoImg from '$assets/images/logo.png';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { PiPhone } from 'react-icons/pi';

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
      id="contanto"
      scrollMarginTop="120px"
      as="footer"
      mt="8"
      borderTop="1px solid"
      borderColor="gray.300"
    >
      <Stack py="10" px={['4', '4', '8']}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={4}>
            <Link href="/">
              <Image
                alt="Letras E T E, acrônimo para escola técnica estadual com fundo azul."
                w="120px"
                src={logoImg.src}
              />
            </Link>

            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} ETE AVS. Todos os direitos reservdos
            </Text>

            <Text fontSize={'sm'} display="flex" alignItems="center">
              <Icon mr="1" as={PiPhone} /> +55 087 37618288
            </Text>

            <Text fontSize={'sm'} display="flex" alignItems="center">
              <Icon mr="1" as={AiOutlineMail} /> eteavs.sub@gmail.com
            </Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Sobre</ListHeader>

            <NextLink href={'/#sobre'}>Escola</NextLink>

            <NextLink href={'/#ensino'}>Ensino</NextLink>

            <Link isExternal href="https://maps.app.goo.gl/hivg8RUcAw9GpnMn6">
              Localização
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Cursos</ListHeader>

            <NextLink href={'/#ensino'}>Ensino médio integrado</NextLink>

            <NextLink href={'/#ensino'}>Subsequente</NextLink>

            <NextLink href={'/#ensino'}>Ensino a distância</NextLink>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Redes Sociais</ListHeader>

            <Center
              as={Link}
              isExternal
              href="https://www.facebook.com/eteavs/"
            >
              <Icon as={FaFacebook} mr="1" /> Facebook
            </Center>

            <Center
              as={Link}
              isExternal
              href="https://www.instagram.com/etearianosuassuna/"
            >
              <Icon as={FaInstagram} mr="1" /> Instagram
            </Center>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
