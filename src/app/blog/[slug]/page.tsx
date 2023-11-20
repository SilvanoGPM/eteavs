import { Metadata } from 'next';

import { BlogFoundTemplate } from '$templates/blog-found';

export const metadata: Metadata = {
  title: 'Blog da Escola Técnica Estadual Ariano Vilar Suassuna',
  description:
    'Blog com as notícias atualizadas da Escola Técnica Estadual Ariano Vilar Suassuna.',
};

export default function BlogFound() {
  return <BlogFoundTemplate />;
}
