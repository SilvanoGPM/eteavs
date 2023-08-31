'use client';

import { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { Box, Flex } from '@chakra-ui/react';

import { Header } from '$components/header';

import { Providers } from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <NextTopLoader color="#D69E2E" />

        <Providers>
          <Flex maxW="1200px" mx="auto" direction="column" minH="100vh">
            <Header />

            <Box as="main" flex="1">
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
