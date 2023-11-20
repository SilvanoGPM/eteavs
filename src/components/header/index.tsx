'use client';

import {
  Box,
  Center,
  Fade,
  Flex,
  SystemStyleObject,
  useEventListener,
} from '@chakra-ui/react';

import { useScreenVersion } from '$hooks/use-screen-version';
import { useUIStore } from '$stores/ui';
import { throttle } from '$utils/throttle';

import { glassmorphismContainer } from '$styles/tokens';
import { Content } from './content';
import { Logo } from './logo';
import { SidebarButtons } from './sidebar-buttons';

const ON_SCROLL_THROTTLE_MILLIS = 200;
const MIN_HEIGHT_TO_TOP = 50;

export function Header() {
  const { sidebarIsOpen, headerInTop, headerFilled, setHeaderInTop } =
    useUIStore();

  const isLargeScreen = useScreenVersion('lg');

  function onScroll() {
    if (isLargeScreen) {
      setHeaderInTop(window.scrollY < MIN_HEIGHT_TO_TOP);
    }
  }

  useEventListener('scroll', throttle(onScroll, ON_SCROLL_THROTTLE_MILLIS));

  if (!isLargeScreen) {
    return (
      <Fade in>
        <Logo pos="absolute" top="8" left={['4', '4', '8']} h="40px" />

        <Box
          boxSize="2rem"
          rounded="full"
          pos="fixed"
          top="2.5rem"
          right="2.5rem"
          zIndex="998"
          bgGradient="radial(blue.900, blue.100)"
          transform="auto"
          scale={sidebarIsOpen ? '120' : '0'}
          opacity={sidebarIsOpen ? '1' : '0'}
          transition={
            sidebarIsOpen ? '0.5s ease-in-out' : '0.2s ease-in-out 0.5s'
          }
        />

        <Flex
          as="header"
          pos="fixed"
          left="0"
          direction="column"
          py="4"
          h="100vh"
          top={sidebarIsOpen ? '0' : '-100vh'}
          right="0"
          zIndex="999"
          justify="space-evenly"
          w="100%"
          overflow="hidden"
          transition={
            sidebarIsOpen ? '0.5s ease-in-out 0.2s' : '0.2s ease-in-out'
          }
        >
          <Content isLargeScreen={isLargeScreen} />
        </Flex>

        <SidebarButtons sidebarIsOpen={sidebarIsOpen} />
      </Fade>
    );
  }

  let headerProps: SystemStyleObject = headerInTop
    ? { '&': { bg: 'transparent' } }
    : glassmorphismContainer({ bg: 'blueAlpha.500' });

  if (headerFilled) {
    headerProps = { '&': { bg: 'blue.900', color: 'white' } };
  }

  return (
    <>
      <Box h="100px" w="full" />

      <Center
        as="header"
        pos="fixed"
        zIndex="modal"
        top="0"
        left="0"
        h="100px"
        w="full"
        transition="0.2s ease-in-out"
        sx={headerProps}
      >
        <Flex
          as={Fade}
          in
          w="full"
          maxW="7xl"
          px="8"
          justify="space-between"
          align="center"
        >
          <Content isLargeScreen={isLargeScreen} />
        </Flex>
      </Center>
    </>
  );
}
