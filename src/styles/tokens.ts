interface GlassmorphismContainerProps {
  bg?: string;
  blur?: string;
}

export const thinScrollbar = {
  '&': { scrollbarWidth: 'thin' },
  '&::-webkit-scrollbar ': { width: '9px' },
  '&::-webkit-scrollbar-track': { bg: 'transparent' },
  '&::-webkit-scrollbar-thumb': {
    bg: 'blue.500',
    border: 'transparent',
  },
};

export function glassmorphismContainer({
  bg = 'blueAlpha.500',
  blur = '5px',
}: GlassmorphismContainerProps = {}) {
  return {
    '&': {
      backdropFilter: `blur(${blur})`,
      boxShadow: 'dark-lg',
      bg,
    },
  };
}
