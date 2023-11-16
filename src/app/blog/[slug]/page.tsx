import { Metadata } from 'next';

import { BlogTemplate } from '$templates/blog';

export const metadata: Metadata = {
  title: 'Blog da Escola Técnica Estadual Ariano Vilar Suassuna',
  description:
    'Blog com as notícias atualizadas da Escola Técnica Estadual Ariano Vilar Suassuna.',

  themeColor: '#3182CE',

  manifest: '/manifest.json',

  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function Blog() {
  return <BlogTemplate />;
}
