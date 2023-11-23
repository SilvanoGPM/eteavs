import { FindNewsDocument } from '$graphql/generated';
import { request } from '$services/datocms/client';

export interface FindNewsParams {
  page: number;
  size?: number;
}

export async function findNews({ page, size = 10 }: FindNewsParams) {
  const skip = (page - 1) * size;

  return request(FindNewsDocument, {
    first: size,
    skip,
  });
}
