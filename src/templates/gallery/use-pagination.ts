import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export function usePagination() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.page) {
      let page = parseInt(String(router.query.page));

      if (isNaN(page) || page <= 0) {
        page = 1;
      }

      setPage(page);
    }
  }, [router.query]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const updateQuery = useCallback(
    (page: number) => {
      router.push({
        pathname: router.pathname,
        query: { page },
      });
    },
    [router],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);
      updateQuery(page);
    },
    [updateQuery],
  );

  return {
    page,
    setPage: handlePageChange,
  };
}
