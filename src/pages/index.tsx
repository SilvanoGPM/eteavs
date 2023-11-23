import { DefaultLayout } from '$components/default-layout';
import { GetHomeInfoDocument } from '$graphql/generated';
import { request } from '$services/datocms/client';
import { HomeTemplate, HomeTemplateProps } from '$templates/home';
import { formatNewsLink } from '$utils/format-news-link';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export default function Home(props: HomeTemplateProps) {
  return (
    <>
      <NextSeo
        title="Escola Técnica Estadual Ariano Vilar Suassuna"
        description="Site para a Escola Técnica Estadual Ariano Vilar Suassuna"
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <DefaultLayout>
        <HomeTemplate {...props} />
      </DefaultLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const data = await request(GetHomeInfoDocument);

  const news = formatNewsLink(data.allBlogs);

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
  };

  return {
    props,
    revalidate: 60 * 60 * 24, // every day
  };
};
