import { SlideFade } from '$components/animations/slide-fade';
import { Slide, Slider } from '$components/slider';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player/lazy';

export function Structure() {
  const settings = {
    draggable: true,
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    speed: 500,
  };

  return (
    <Flex
      id="estrutura"
      scrollMarginTop="120px"
      w="full"
      direction="column"
      pt="12"
      pb="12"
    >
      <SlideFade delay={200} direction="down">
        <Center flexDir="column">
          <Heading textAlign="left" fontSize="3xl">
            Estrutura
          </Heading>

          <Box w="50px" h="4px" bg="yellow.500" rounded="full" />
        </Center>
      </SlideFade>

      <Flex
        mt="8"
        pb="8"
        maxW="900px"
        mx="auto"
        flexDir="column"
        align="center"
        sx={{
          '.slide': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Slider w="full" settings={settings}>
          {[1, 2, 3, 4, 5].map((image) => {
            return (
              <Slide key={image} className="slide">
                <Center
                  flexDirection="column"
                  w="full"
                  h="full"
                  sx={{ video: { objectFit: 'cover' } }}
                >
                  <ReactPlayer
                    url="/assets/bg.mp4#t=0.1"
                    controls
                    pip
                    width="100%"
                    height="80%"
                  />

                  <Heading fontSize="2xl" mt="4" textAlign="center">
                    Laboratório de Informática
                  </Heading>
                  <Text color="gray.500" textAlign="center" maxW="500px">
                    Espaço para aprimoramento tecnologico
                  </Text>
                </Center>
              </Slide>
            );
          })}
        </Slider>
      </Flex>
    </Flex>
  );
}
