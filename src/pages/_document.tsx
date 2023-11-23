import { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import { SplashScreen } from '$components/splash-screen';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta
          name="description"
          content="Site para a Escola Técnica Estadual Ariano Vilar Suassuna"
        />

        <meta name="theme-color" content="#3182CE" />
      </Head>

      <body>
        <ColorModeScript initialColorMode="light" />
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
