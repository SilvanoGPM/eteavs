'use client';

import { Center, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center w="full" h="full">
      <Spinner color="blue.500" />
    </Center>
  );
}
