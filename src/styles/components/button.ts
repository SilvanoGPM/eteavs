import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    rounded: 'md',
    textTransform: 'uppercase',
    transition: '0.2s ease-in-out',
  },

  variants: {
    solid: {
      bg: 'yellow.500',
      color: 'white',

      _hover: {
        bg: 'yellow.700',
      },

      _active: {
        bg: 'yellow.800',
      },
    },

    outline: {
      bg: 'yellowAlpha.200',
      borderColor: 'yellowAlpha.400',
      color: 'yellow.500',
      fontWeight: '600',

      _hover: {
        bg: 'yellowAlpha.300',
        borderColor: 'yellowAlpha.400',
      },

      _active: {
        bg: 'yellowAlpha.400',
        borderColor: 'yellowAlpha.500',
      },
    },
  },
};
