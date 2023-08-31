import { useBreakpointValue } from '@chakra-ui/react';

export function useScreenVersion(option: 'sm' | 'md' | 'lg') {
  const value = useBreakpointValue(
    {
      base: 'sm',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    },
    { ssr: true, fallback: option },
  );

  return value === option;
}
