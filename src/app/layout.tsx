'use client';

import { Container, Flex } from '@chakra-ui/react';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import { Header } from '$components/header';

import { Providers } from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <NextTopLoader color="#D69E2E" />

        <Providers>
          <Flex
            as={Container}
            direction="column"
            h="100vh"
            maxW="7xl"
            px={['4', '4', '8']}
          >
            <Header />

            <Flex as="main" direction="column" flex="1" w="full" h="full">
              {children}
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
