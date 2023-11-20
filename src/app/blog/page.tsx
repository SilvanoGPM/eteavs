import { Metadata } from 'next';

import { BlogTemplate } from '$templates/blog';

export const metadata: Metadata = {
  title: 'Blog da Escola Técnica Estadual Ariano Vilar Suassuna',
  description:
    'Blog com as notícias atualizadas da Escola Técnica Estadual Ariano Vilar Suassuna.',
};

export default function Blog() {
  return <BlogTemplate />;
}
