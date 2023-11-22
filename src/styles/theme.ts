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
    green: {
      '900': '#006525',
      '800': '#00762c',
      '700': '#008732',
      '600': '#009838',
      '500': '#00A93F',
      '400': '#00cb4b',
      '300': '#00ed58',
      '200': '#10ff69',
      '100': '#32ff7e',
    },

    // blue: {
    //   '900': '#1c234a',
    //   '800': '#212956',
    //   '700': '#262f63',
    //   '600': '#2b356f',
    //   '500': '#303B7C',
    //   '400': '#394694',
    //   '300': '#4252ac',
    //   '200': '#5463bc',
    //   '100': '#6c79c6',
    // },

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
    heading: 'var(--font-montserrant)',
    body: 'var(--font-montserrant)',
  },

  styles: {
    global: {
      html: {
        ...thinScrollbar,
        scrollBehavior: 'smooth',
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
