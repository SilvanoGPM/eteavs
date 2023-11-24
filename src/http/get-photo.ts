import { GetPhotoDocument } from '$graphql/generated';
import { request } from '$services/datocms/client';

export async function getPhoto(slug: string) {
  return request(GetPhotoDocument, { slug });
}
