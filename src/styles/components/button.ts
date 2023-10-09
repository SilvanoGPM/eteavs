import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    rounded: 'md',
    textTransform: 'uppercase',
    transition: '0.2s ease-in-out',
  },

  variants: {
    customSolid: {
      bg: `blue.500`,
      color: 'white',

      _hover: {
        bg: `blue.700`,
      },

      _active: {
        bg: `blue.800`,
      },
    },

    customOutline: {
      bg: 'blueAlpha.200',
      borderWidth: '1px',
      borderColor: 'blue.500',
      color: 'blue.500',
      fontWeight: '600',

      _hover: {
        bg: 'blueAlpha.400',
        borderColor: 'blue.600',
      },

      _active: {
        bg: 'blueAlpha.500',
        borderColor: 'blue.700',
      },
    },
  },
};
