import { Box, BoxProps, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { PiCameraPlus } from 'react-icons/pi';
import { Image } from './image';

export interface Photo {
  slug: string;
  createdAt: string;
  title: string;
  thumbnail: string;
}

interface PhotoLinkProps extends BoxProps {
  photo?: Photo;
}

export function PhotoLink({ photo, ...props }: PhotoLinkProps) {
  if (!photo) {
    return null;
  }

  return (
    <Box
      as={Link}
      href={`/galeria/${photo.slug}`}
      pos="relative"
      h={{ base: '320px', sm: '420px' }}
      w="full"
      role="group"
      cursor="pointer"
      {...props}
    >
      <Icon
        as={PiCameraPlus}
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
        color="white"
        fontSize="6xl"
        opacity="0"
        transition="0.2s ease-in-out"
        _groupHover={{
          opacity: 1,
        }}
      />

      <Image
        src={photo.thumbnail}
        alt={photo.title}
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        w="full"
        h="full"
        objectFit="cover"
        filter="auto"
        transition="0.2s ease-in-out"
        brightness="0.5"
        _groupHover={{
          brightness: '0.6',
        }}
      />
    </Box>
  );
}
