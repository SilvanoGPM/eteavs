/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Box, Image, Text } from '@chakra-ui/react';
import { CustomHeader } from './custom-header';

export const components = {
  h1(props: any) {
    return <CustomHeader {...props} />;
  },

  h2(props: any) {
    return <CustomHeader {...props} />;
  },

  h3(props: any) {
    return <CustomHeader {...props} />;
  },

  h4(props: any) {
    return <CustomHeader {...props} />;
  },

  h5(props: any) {
    return <CustomHeader {...props} />;
  },

  h6(props: any) {
    return <CustomHeader {...props} />;
  },

  p: (paragraph: { children?: any; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0]?.tagName === 'img') {
      const image = node.children[0];

      console.log(image);

      return (
        <div>
          <Image
            src={image.properties.src}
            alt={image.properties.alt || ''}
            w="full"
            h="full"
            maxW="full"
            maxH="400px"
          />
        </div>
      );
    }

    const isCenter = node.properties.center !== undefined;
    const iSpaceBetween = node.properties['space-between'] !== undefined;

    let style;

    if (isCenter) {
      style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '16px',
      };
    } else if (iSpaceBetween) {
      style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '16px',
      };
    }

    return (
      <Text fontSize="md" {...style}>
        {paragraph.children}
      </Text>
    );
  },

  ol(props: any) {
    return (
      <Box as="ol" style={{ paddingLeft: '24px' }}>
        {props.children}
      </Box>
    );
  },

  li(props: any) {
    return (
      <Box as="li" mt="4">
        {props.children}
      </Box>
    );
  },
};
