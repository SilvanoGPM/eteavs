'use client';

import { Flex, VStack } from '@chakra-ui/react';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import VLibras from 'vlibras-nextjs';

import { Header } from '$components/header';

import { Footer } from '$components/footer';
import { Providers } from './providers';

import { Poppins } from 'next/font/google';

const lato = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
});

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
          <Flex direction="column">
            <Header />

            <VStack as="main" align="start" gap="8" flex="1" w="full" h="full">
              {children}
            </VStack>
          </Flex>

          <Footer />
        </Providers>

        {process.env.NODE_ENV === 'production' && <VLibras forceOnload />}
      </body>
    </html>
  );
}
