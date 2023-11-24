import { DefaultLayout } from '$components/default-layout';
import { findNews } from '$http/find-news';
import { getNews } from '$http/get-news';
import { News, NewsTemplate, NewsTemplateProps } from '$templates/news';
import { formatDateExtended } from '$utils/format-date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export default function News(props: NewsTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${props.news.title} - Escola Técnica Estadual Ariano Vilar Suassuna`}
        openGraph={{
          images: [{ url: props.news.thumbnail, alt: props.news.title }],
        }}
        description={props.news.resume}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <DefaultLayout>
        <NewsTemplate {...props} />
      </DefaultLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await findNews({ page: 1, size: 50 });

  const paths = data.allBlogs.map(({ slug }) => ({
    params: { slug: String(slug) },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<NewsTemplateProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string };

  const data = await getNews(slug);

  if (!data.blog) {
    return { notFound: true };
  }

  const news: News = {
    title: String(data.blog.title),
    content: String(data.blog.content),
    createdAt: formatDateExtended(String(data.blog._createdAt)),
    updatedAt: formatDateExtended(String(data.blog._updatedAt)),
    resume: String(data.blog.resume),
    thumbnail: String(data.blog.thumbnail?.url),
  };

  return {
    props: { news },
    revalidate: 60 * 60 * 24, // one day
  };
};
