import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import { SyntheticEvent } from 'react';

export function useShimmerAnimation(imageBg?: string) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const shimmerAnimation = keyframes`
  from {
    background-position: -40rem 0;
  }

  to {
    background-position: 40rem 0;
  }
  `;

  const animation = prefersReducedMotion
    ? undefined
    : `${shimmerAnimation} 1s linear infinite forwards`;

  return {
    animation,
    bgSize: '80rem 14rem',
    bgColor: '#b4b6b8',
    bgGradient:
      'linear(to-r, #b4b6b8 0%, #acadaf 20%, #b4b6b8 40%, #acadaf 100% )',

    onLoad: (event: SyntheticEvent<HTMLImageElement, Event>) =>
      (event.currentTarget.style.background = imageBg || '#b4b6b8'),
  };
}
