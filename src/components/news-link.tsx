import { useShimmerAnimation } from '$hooks/use-shimmer-animation';
import { Flex, FlexProps, Heading, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PiCalendarBlank } from 'react-icons/pi';

export interface News {
  slug: string;
  createdAt: string;
  title: string;
  thumbnail: string;
}

interface NewsLinkProps extends FlexProps {
  isSmall?: boolean;
  news?: News;
}

export function NewsLink({ news, isSmall = false, ...props }: NewsLinkProps) {
  const shimmerAnimation = useShimmerAnimation();

  if (!news) {
    return;
  }

  return (
    <Flex
      pos="relative"
      w="full"
      h="full"
      as={Link}
      href={`/blog/${news.slug}`}
      title={news.title}
      role="group"
      overflow="hidden"
      minH={{ base: '200px' }}
      {...props}
    >
      <Image
        src={news.thumbnail}
        alt={news.title}
        w="full"
        h="full"
        pos="absolute"
        filter="auto"
        objectFit="cover"
        brightness="0.5"
        transition="0.2s ease-in-out"
        transform="auto"
        _groupHover={{ brightness: '0.35', scale: '1.1' }}
        {...shimmerAnimation}
      />

      <Flex
        direction="column"
        pos="absolute"
        zIndex="1"
        w="full"
        h="full"
        justify="end"
        p="4"
        color="white"
      >
        <Text
          as="time"
          color="gray.400"
          mb="2"
          fontSize={{ base: 'x-small', lg: 'md' }}
          display="flex"
          alignItems="center"
        >
          <Icon as={PiCalendarBlank} mr="1" /> {news.createdAt}
        </Text>

        <Heading
          title={news.title}
          fontSize={{ base: isSmall ? 'md' : 'xl', md: isSmall ? 'md' : '2xl' }}
        >
          {news.title.length > 100
            ? news.title.slice(0, 100) + '...'
            : news.title}
        </Heading>
      </Flex>
    </Flex>
  );
}
