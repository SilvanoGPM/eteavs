import { DefaultLayout } from '$components/default-layout';
import { GetHomeInfoDocument } from '$graphql/generated';
import { request } from '$services/datocms/client';
import { HomeTemplate, HomeTemplateProps } from '$templates/home';
import { Local } from '$templates/home/components/structure';
import { formatNewsLink } from '$utils/format-news-link';
import { formatPhotosLink } from '$utils/format-photos-link';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export default function Home(props: HomeTemplateProps) {
  return (
    <>
      <NextSeo
        title="Escola Técnica Estadual Ariano Vilar Suassuna"
        description="A 43ª Escola Técnica Estadual (ETE) inaugurada em 5 de julho de 2018, e a primeira de Garanhuns, possuindo ensino médio integrado, subsequente e a distância."
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          images: [
            {
              url: 'https://eteavs.vercel.app/cover.jpg',
              width: 1280,
              height: 720,
              alt: 'Escola Técnica Estadual Ariano Vilar Suassuna',
            },
          ],
        }}
      />

      <DefaultLayout>
        <HomeTemplate {...props} />
      </DefaultLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const data = await request(GetHomeInfoDocument, {
    newsFirst: 5,
    photosFirst: 8,
  });

  const news = formatNewsLink(data.allBlogs);
  const photos = formatPhotosLink(data.allPhotos);

  const locals = data.allStructures.map<Local>((local) => ({
    name: String(local.name),
    description: String(local.description),
    video: String(local.video?.url),
  }));

  const props: HomeTemplateProps = {
    introduction: String(data.home?.introduction),
    aboutUs: String(data.home?.aboutUs),
    teaching: {
      em: {
        resume: String(data.home?.teachingEmResume),
        full: String(data.home?.teachingEm),
      },

      sub: {
        resume: String(data.home?.teachingSubResume),
        full: String(data.home?.teachingSub),
      },

      ead: {
        resume: String(data.home?.teachingEadResume),
        full: String(data.home?.teachingEad),
      },
    },

    news,
    photos,
    locals,
  };

  return {
    props,
    revalidate: 60 * 60 * 24, // every day
  };
};
