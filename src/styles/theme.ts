import { extendTheme } from '@chakra-ui/react';

import { thinScrollbar } from './tokens';

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,

  styles: {
    global: {
      html: {
        ...thinScrollbar,
      },

      body: {
        ...thinScrollbar,
      },
    },
  },
});
