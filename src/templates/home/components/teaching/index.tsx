import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import Wave from 'react-wavify';

import { TeachingCard } from '$components/teaching-card';
import { thinScrollbar } from '$styles/tokens';

import emImg from '$assets/images/em.jpeg';
import eadImg from '$assets/images/ead.jpeg';
import subsequenteImg from '$assets/images/subsequente.jpeg';

export function Teaching() {
  return (
    <Flex
      w="full"
      flexDir="column"
      bg="blue.900"
      pb="8"
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

      <Center flexDir="column" mb="8" mt="8">
        <Heading textAlign="center" color="white" fontSize="3xl">
          Segmentos de Ensino
        </Heading>

        <Box w="100px" h="4px" bg="yellow.500" rounded="full" />
      </Center>

      <Flex
        justify={{ base: 'start', lg: 'center' }}
        gap={{ base: '6', md: '8', lg: '12' }}
        p="4"
        bg="blue.900"
        pos="relative"
        overflow="auto"
        sx={thinScrollbar}
      >
        <TeachingCard
          image={emImg.src}
          title="Ensino Médio Integrado"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, excepturi vero quam, voluptatibus illum nesciunt sequi rerum ratione voluptatem nisi temporibus iusto est veritatis doloremque, magnam tenetur mollitia. Delectus."
          body={
            <Flex direction="column" gap="4">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
            </Flex>
          }
        />

        <TeachingCard
          image={subsequenteImg.src}
          title="Subsequente"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, excepturi vero quam, voluptatibus illum nesciunt sequi rerum ratione voluptatem nisi temporibus iusto est veritatis doloremque, magnam tenetur mollitia. Delectus."
          body={
            <Flex direction="column" gap="4">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
            </Flex>
          }
        />

        <TeachingCard
          image={eadImg.src}
          title="Ensino a distância"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, excepturi vero quam, voluptatibus illum nesciunt sequi rerum ratione voluptatem nisi temporibus iusto est veritatis doloremque, magnam tenetur mollitia. Delectus."
          body={
            <Flex direction="column" gap="4">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                in explicabo consequuntur ratione autem corporis sequi nobis
                eius aperiam qui, voluptatem debitis harum laborum, magni beatae
                placeat quasi, numquam modi?
              </Text>
            </Flex>
          }
        />
      </Flex>
    </Flex>
  );
}
