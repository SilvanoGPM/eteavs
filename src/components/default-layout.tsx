import { Flex, VStack } from '@chakra-ui/react';
import { Header } from './header';
import { Footer } from './footer';
import { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Flex direction="column">
        <Header />

        <VStack as="main" align="start" gap="0" flex="1" w="full" h="full">
          {children}
        </VStack>
      </Flex>

      <Footer />
    </>
  );
}
