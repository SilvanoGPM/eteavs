import { Box, Center, HStack, Heading } from '@chakra-ui/react';

import eteImg from '$assets/images/ete.jpg';
import { TeachingCard } from '$components/teaching-card';

export function Teaching() {
  return (
    <Center
      w="full"
      flexDir="column"
      bg="blue.900"
      minH="100vh"
      overflowX="auto"
    >
      <Center flexDir="column" mb="8">
        <Heading textAlign="center" color="white" fontSize="3xl">
          Segmentos de Ensino
        </Heading>

        <Box w="100px" h="4px" bg="yellow.500" rounded="full" />
      </Center>

      <HStack gap="12" p="4" overflowX="auto">
        <TeachingCard
          image={eteImg.src}
          title="Ensino Médio Integrado"
          onClick={console.log}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, excepturi vero quam, voluptatibus illum nesciunt sequi rerum ratione voluptatem nisi temporibus iusto est veritatis doloremque, magnam tenetur mollitia. Delectus."
        />
        <TeachingCard
          image={eteImg.src}
          title="Subsequente"
          onClick={console.log}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, excepturi vero quam, voluptatibus illum nesciunt sequi rerum ratione voluptatem nisi temporibus iusto est veritatis doloremque, magnam tenetur mollitia. Delectus."
        />
        <TeachingCard
          image={eteImg.src}
          title="Ensino a distância"
          onClick={console.log}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, excepturi vero quam, voluptatibus illum nesciunt sequi rerum ratione voluptatem nisi temporibus iusto est veritatis doloremque, magnam tenetur mollitia. Delectus."
        />
      </HStack>
    </Center>
  );
}
