import { Metadata } from 'next';

import { HomeTemplate } from '$templates/home';

export const metadata: Metadata = {
  title: 'Escola Técnica Estadual Ariano Vilar Suassuna',
  description: 'Site para a Escola Técnica Estadual Ariano Vilar Suassuna.',

  themeColor: '#3182CE',

  manifest: '/manifest.json',

  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function Home() {
  return <HomeTemplate />;
}
