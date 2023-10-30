import { Flex, FlexProps, Heading, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PiCalendarBlank } from 'react-icons/pi';

interface NewsLinkProps extends FlexProps {
  isSmall?: boolean;
  news: {
    title: string;
    image: string;
    date: string;
    link: string;
  };
}

export function NewsLink({ news, isSmall = false, ...props }: NewsLinkProps) {
  return (
    <Flex
      pos="relative"
      w="full"
      h="full"
      as={Link}
      href={news.link}
      title={news.title}
      role="group"
      rounded="2xl"
      overflow="hidden"
      {...props}
    >
      <Image
        src={news.image}
        alt={news.title}
        w="full"
        h="full"
        pos="absolute"
        filter="auto"
        objectFit="cover"
        brightness="0.25"
        transition="0.2s ease-in-out"
        transform="auto"
        _groupHover={{ brightness: '0.35', scale: '1.1' }}
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
          display="flex"
          alignItems="center"
        >
          <Icon as={PiCalendarBlank} mr="1" /> {news.date}
        </Text>
        <Heading
          fontSize={{ base: isSmall ? 'md' : 'xl', md: isSmall ? 'xl' : '2xl' }}
        >
          {news.title}
        </Heading>
      </Flex>
    </Flex>
  );
}
