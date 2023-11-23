'use client';

import { Image } from '$components/image';
import { Markdown } from '$components/markdown';
import { useHeaderFilled } from '$hooks/use-header-filled';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { PiCalendarBlank } from 'react-icons/pi';

export interface News {
  title: string;
  createdAt: string;
  updatedAt: string;
  resume: string;
  content: string;
  thumbnail: string;
}

export interface NewsTemplateProps {
  news: News;
}

export function NewsTemplate({ news }: NewsTemplateProps) {
  useHeaderFilled(true);

  return (
    <>
      <Flex h="50px" w="full" display={{ base: 'block', lg: 'none' }} />

      <Flex
        direction="column"
        maxW="900px"
        mx="auto"
        w="full"
        py="16"
        px={{ base: '4' }}
      >
        <Flex direction="column" mb="4">
          <Heading maxW="100%" fontSize="2xl" title={news.title}>
            {news.title}
          </Heading>

          <Text color="gray.500" as={Markdown} mt="2">
            {news.resume}
          </Text>

          <Text
            as="time"
            color="gray700"
            mb="2"
            mt="4"
            fontSize="md"
            display="flex"
            alignItems="center"
          >
            <Icon as={PiCalendarBlank} mr="1" /> {news.createdAt}
          </Text>
        </Flex>

        <Box w="full" h="400px" rounded="2xl" overflow="hidden">
          <Image
            w="full"
            h="full"
            objectFit="cover"
            title={news.title}
            alt={news.title}
            src={news.thumbnail}
            filter="auto"
            brightness="0.5"
          />
        </Box>

        <Box w="full" mt="8" as={Markdown}>
          {news.content}
        </Box>
      </Flex>
    </>
  );
}
