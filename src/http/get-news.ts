import { GetNewsDocument } from '$graphql/generated';
import { request } from '$services/datocms/client';

export async function getNews(slug: string) {
  return request(GetNewsDocument, { slug });
}
