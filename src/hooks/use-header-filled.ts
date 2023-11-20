import { useUIStore } from '$stores/ui';
import { useEffect } from 'react';

export function useHeaderFilled(headerFilled: boolean) {
  const { setHeaderFilled } = useUIStore();

  useEffect(() => {
    setHeaderFilled(headerFilled);
  }, [headerFilled, setHeaderFilled]);
}
