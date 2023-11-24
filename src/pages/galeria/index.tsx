import { DefaultLayout } from '$components/default-layout';
import { GalleryTemplate } from '$templates/gallery';
import { NextSeo } from 'next-seo';

export default function Gallery() {
  return (
    <>
      <NextSeo
        title="Galeria - Escola Técnica Estadual Ariano Vilar Suassuna"
        description="Galeria para a Escola Técnica Estadual Ariano Vilar Suassuna"
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <DefaultLayout>
        <GalleryTemplate />
      </DefaultLayout>
    </>
  );
}
