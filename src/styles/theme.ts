import { extendTheme } from '@chakra-ui/react';

import { thinScrollbar } from './tokens';
import { Button } from './components/button';

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,

  components: {
    Button,
  },

  colors: {
    blueAlpha: {
      '100': 'rgba(26, 54, 93, 0.1)',
      '200': 'rgba(26, 54, 93, 0.2)',
      '300': 'rgba(26, 54, 93, 0.3)',
      '400': 'rgba(26, 54, 93, 0.4)',
      '500': 'rgba(26, 54, 93, 0.5)',
      '600': 'rgba(26, 54, 93, 0.6)',
      '700': 'rgba(26, 54, 93, 0.7)',
      '800': 'rgba(26, 54, 93, 0.8)',
      '900': 'rgba(26, 54, 93, 0.9)',
    },

    yellowAlpha: {
      '100': 'rgba(214, 158, 46, 0.1)',
      '200': 'rgba(214, 158, 46, 0.2)',
      '300': 'rgba(214, 158, 46, 0.3)',
      '400': 'rgba(214, 158, 46, 0.4)',
      '500': 'rgba(214, 158, 46, 0.5)',
      '600': 'rgba(214, 158, 46, 0.6)',
      '700': 'rgba(214, 158, 46, 0.7)',
      '800': 'rgba(214, 158, 46, 0.8)',
      '900': 'rgba(214, 158, 46, 0.9)',
    },
  },

  fonts: {
    heading: 'var(--font-lato)',
    body: 'var(--font-lato)',
  },

  styles: {
    global: {
      html: {
        ...thinScrollbar,
      },

      body: {
        ...thinScrollbar,
        overflowX: 'hidden',
      },

      '#detach-button-host': {
        display: 'none !important', // disable picture-in-picture button
      },
    },
  },
});
