'use client';

import { Container, Flex, VStack } from '@chakra-ui/react';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import { Header } from '$components/header';

import { Footer } from '$components/footer';
import { Providers } from './providers';

import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <style jsx global>
        {`
          :root {
            --font-lato: ${lato.style.fontFamily};
          }
        `}
      </style>

      <body>
        <NextTopLoader color="#D69E2E" />

        <Providers>
          <Flex
            as={Container}
            direction="column"
            maxW="7xl"
            px={['4', '4', '8']}
          >
            <Header />

            <VStack as="main" align="start" gap="8" flex="1" w="full" h="full">
              {children}
            </VStack>
          </Flex>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
