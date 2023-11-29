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
          content="A 43ª Escola Técnica Estadual (ETE) inaugurada em 5 de julho de 2018, e a primeira de Garanhuns, possuindo ensino médio integrado, subsequente e a distância."
        />

        <meta name="theme-color" content="#1A365D" />
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
