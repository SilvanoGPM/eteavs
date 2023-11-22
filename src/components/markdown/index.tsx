import { StackProps, VStack } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { Replace } from '$utils/replace';

import { tagStyles } from './tag-styles';
import { components } from './components';

export function Markdown({
  children,
  ...props
}: Replace<StackProps, { children: string }>) {
  return (
    <VStack
      fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
      align="start"
      {...props}
      sx={{ ...tagStyles, ...props.sx }}
    >
      <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>
        {children}
      </ReactMarkdown>
    </VStack>
  );
}
