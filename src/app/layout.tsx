import { ReactNode } from 'react';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'ETE Ariano Vilar Suassuna',
  description: 'Site para a Escola Técnica Estadual Ariano Vilar Suassuna.',

  themeColor: '#D69E2E',

  manifest: '/manifest.json',

  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <NextTopLoader color="#D69E2E" />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
