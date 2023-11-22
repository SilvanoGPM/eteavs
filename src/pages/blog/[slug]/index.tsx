import { DefaultLayout } from '$components/default-layout';
import { BlogFoundTemplate } from '$templates/blog-found';
import { NextSeo } from 'next-seo';

export default function BlogFound() {
  return (
    <>
      <NextSeo
        title="Blog - Escola Técnica Estadual Ariano Vilar Suassuna"
        description="Blog para a Escola Técnica Estadual Ariano Vilar Suassuna"
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <DefaultLayout>
        <BlogFoundTemplate />
      </DefaultLayout>
    </>
  );
}
