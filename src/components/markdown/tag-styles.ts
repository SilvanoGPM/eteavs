import { SystemStyleObject } from '@chakra-ui/react';

export const tagStyles: SystemStyleObject = {
  strong: { color: 'brand.500' },

  'ol, ul': {
    pl: '2.5rem',
  },

  a: {
    '&': {
      color: 'yellow.500',
    },

    '&:hover': {
      textDecor: 'underline',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'bold',
    mt: '1rem !important',
  },
};
