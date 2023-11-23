import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

import { CacheProvider } from '@chakra-ui/next-js';
import { Montserrat } from 'next/font/google';
import VLibras from 'vlibras-nextjs';

import { useUIStore } from '$stores/ui';
import { theme } from '$styles/theme';

import { useScrollLock } from '$hooks/use-scroll-lock';
import { useSplashScreen } from '$hooks/use-splash-screen';
import { queryClient } from '$services/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import SEO from 'next-seo.config';

const montserrant = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
});

function App({ Component, pageProps }: AppProps) {
  useSplashScreen('hide');

  const { closeSidebar } = useUIStore();
  const { unlockScroll } = useScrollLock();

  Router.events.on('routeChangeComplete', () => {
    unlockScroll();
    closeSidebar();
  });

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-montserrant: ${montserrant.style.fontFamily};
          }
        `}
      </style>

      <DefaultSeo {...SEO} />

      <NextNProgress
        color={theme.colors.yellow['500']}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />

      <ChakraProvider theme={theme}>
        <CacheProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </CacheProvider>
      </ChakraProvider>

      {process.env.NODE_ENV === 'production' && <VLibras forceOnload />}
    </>
  );
}

export default App;
