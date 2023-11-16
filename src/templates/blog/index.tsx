'use client';

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PiCalendarBlank } from 'react-icons/pi';

export function BlogTemplate() {
  return (
    <>
      <Flex
        h="100px"
        bg="blue.700"
        w="full"
        pos="absolute"
        top="0"
        left="0"
        right="0"
      />
      <Flex h="50px" w="full" display={{ base: 'block', lg: 'none' }} />

      <Flex
        direction="column"
        maxW="900px"
        mx="auto"
        w="full"
        py="16"
        px={{ base: '4' }}
      >
        <Flex direction="column" mb="4">
          <Heading maxW="100%" fontSize="2xl">
            Raquel Lira Visita Escola Técnica Estadual Com Seu Novo Programa:
            Voz do Povo
          </Heading>

          <Text
            as="time"
            color="gray700"
            mb="2"
            mt="4"
            fontSize="md"
            display="flex"
            alignItems="center"
          >
            <Icon as={PiCalendarBlank} mr="1" /> 20/09/2023
          </Text>
        </Flex>

        <Box w="full" h="400px" rounded="2xl" overflow="hidden">
          <Image
            w="full"
            h="full"
            objectFit="fill"
            src="https://cdn.folhape.com.br/upload/dn_arquivo/2023/06/raquel_2.jpg"
            filter="auto"
            brightness="0.5"
          />
        </Box>

        <VStack w="full" mt="8">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus voluptatibus inventore porro modi, ipsa sapiente incidunt
            sed praesentium delectus tempora, corporis voluptas recusandae quae
            hic laborum adipisci. Eligendi, maiores?
          </Text>
        </VStack>
      </Flex>
    </>
  );
}
