import { FindPhotosDocument } from '$graphql/generated';
import { request } from '$services/datocms/client';

export interface FindPhotosParams {
  page: number;
  size?: number;
}

export async function findPhotos({ page, size = 10 }: FindPhotosParams) {
  const skip = (page - 1) * size;

  return request(FindPhotosDocument, {
    first: size,
    skip,
  });
}
