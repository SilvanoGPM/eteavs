import { DefaultLayout } from '$components/default-layout';
import { findPhotos } from '$http/find-photos';
import { getPhoto } from '$http/get-photo';
import { Photo, PhotoTemplate, PhotoTemplateProps } from '$templates/photo';
import { formatDateExtended } from '$utils/format-date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export default function Photo(props: PhotoTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${props.photo.title} - Escola Técnica Estadual Ariano Vilar Suassuna`}
        openGraph={{
          images: [{ url: props.photo.thumbnail, alt: props.photo.title }],
        }}
        description={props.photo.description}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <DefaultLayout>
        <PhotoTemplate {...props} />
      </DefaultLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await findPhotos({ page: 1, size: 50 });

  const paths = data.allPhotos.map(({ slug }) => ({
    params: { slug: String(slug) },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PhotoTemplateProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string };

  const data = await getPhoto(slug);

  if (!data.photo) {
    return { notFound: true };
  }

  const photo: Photo = {
    title: String(data.photo.title),
    description: String(data.photo.description),
    createdAt: formatDateExtended(String(data.photo._createdAt)),
    updatedAt: formatDateExtended(String(data.photo._updatedAt)),
    thumbnail: String(data.photo.thumbnail?.url),
    images: data.photo.images.map((image) => String(image.url)),
  };

  return {
    props: { photo },
    revalidate: 60 * 60 * 24, // one day
  };
};
