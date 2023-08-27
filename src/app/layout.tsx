'use client';

import { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from './providers';
import { Box, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('$components/header'), {
  ssr: false,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <NextTopLoader color="#D69E2E" />

        <Providers>
          <Flex maxW="1200px" mx="auto" direction="column" minH="100vh">
            <Header />

            <Box flex="1">{children}</Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
