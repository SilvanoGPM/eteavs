import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { News } from '$components/news-link';
import { findNews, FindNewsParams } from '$http/find-news';
import { formatNewsLink } from '$utils/format-news-link';

export function useFindNews(params: FindNewsParams) {
  const { data: oldData, ...rest } = useQuery({
    queryKey: ['news', params],
    queryFn: () => findNews(params),
    staleTime: Infinity,
  });

  const total = oldData?._allBlogsMeta.count || 0;

  const data = formatNewsLink(oldData?.allBlogs);

  return { data, total, ...rest } as UseQueryResult<News[], unknown> & {
    total: number;
  };
}
