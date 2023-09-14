import { AspectRatio } from '@chakra-ui/react';
import ReactPlayer from 'react-player/lazy';

export function BackgroundVideo() {
  return (
    <AspectRatio
      filter="auto"
      brightness="0.25"
      pos="absolute"
      zIndex="-1"
      top="0"
      left="0"
      w="full"
      h="100vh"
      minH="500px"
      bgGradient="linear(blue.900, blue.500)"
      sx={{ video: { objectFit: 'cover' } }}
    >
      <ReactPlayer
        url="/assets/bg.mp4#t=0.1"
        playing
        loop
        controls={false}
        pip={false}
        volume={0}
        width="100%"
        height="100%"
      />
    </AspectRatio>
  );
}
