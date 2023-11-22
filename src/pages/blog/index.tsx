import { DefaultLayout } from '$components/default-layout';
import { BlogTemplate } from '$templates/blog';
import { NextSeo } from 'next-seo';

export default function Blog() {
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
        <BlogTemplate />
      </DefaultLayout>
    </>
  );
}
