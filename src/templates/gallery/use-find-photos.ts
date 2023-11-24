import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Photo } from '$components/photo-link';
import { findPhotos, FindPhotosParams } from '$http/find-photos';
import { formatPhotosLink } from '$utils/format-photos-link';

export function useFindPhotos(params: FindPhotosParams) {
  const { data: oldData, ...rest } = useQuery({
    queryKey: ['photos', params],
    queryFn: () => findPhotos(params),
    staleTime: Infinity,
  });

  const total = oldData?._allPhotosMeta.count || 0;

  const data = formatPhotosLink(oldData?.allPhotos);

  return { data, total, ...rest } as UseQueryResult<Photo[], unknown> & {
    total: number;
  };
}
