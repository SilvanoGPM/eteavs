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
      right="0"
      bottom="0"
      maxH="100vh"
      bgImage="/assets/bgCover.png"
      bgColor="blue.900"
      overflow="hidden"
      sx={{ video: { objectFit: 'cover' } }}
    >
      <ReactPlayer
        url="/assets/bg2.mp4#t=0.1"
        playing
        loop
        muted
        controls={false}
        pip={false}
        volume={0}
        width="100%"
        height="100%"
      />
    </AspectRatio>
  );
}
