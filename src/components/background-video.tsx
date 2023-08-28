import { AspectRatio } from '@chakra-ui/react';

export function BackgroundVideo() {
  return (
    <AspectRatio
      ratio={1}
      filter="auto"
      brightness="0.25"
      pos="absolute"
      zIndex="-1"
      top="0"
      left="0"
      w="full"
      h="100vh"
      bg="blue.900"
    >
      <video autoPlay loop muted preload="metadata">
        <source src="/assets/bg.mp4#t=0.1" type="video/mp4" />
      </video>
    </AspectRatio>
  );
}
