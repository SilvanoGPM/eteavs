'use client';

import { Box, Center, Fade, Flex, SystemStyleObject } from '@chakra-ui/react';

import { useScreenVersion } from '$hooks/use-screen-version';
import { useUIStore } from '$stores/ui';
import { throttle } from '$utils/throttle';

import { glassmorphismContainer } from '$styles/tokens';
import { useEffect } from 'react';
import { Content } from './content';
import { Logo } from './logo';
import { SidebarButtons } from './sidebar-buttons';

const ON_SCROLL_THROTTLE_MILLIS = 500;
const MIN_HEIGHT_TO_TOP = 50;

export function Header() {
  const { sidebarIsOpen, headerInTop, headerFilled, setHeaderInTop } =
    useUIStore();

  const isLargeScreen = useScreenVersion('lg');

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isLargeScreen) {
        setHeaderInTop(window.scrollY < MIN_HEIGHT_TO_TOP);
      }
    }, ON_SCROLL_THROTTLE_MILLIS);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let headerProps: SystemStyleObject = headerInTop
    ? { '&': { bg: 'transparent' } }
    : glassmorphismContainer({ bg: 'blueAlpha.500' });

  if (headerFilled) {
    headerProps = { '&': { bg: 'blue.900', color: 'white', boxShadow: '2xl' } };
  }

  if (!isLargeScreen) {
    return (
      <Flex
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="10"
        align="center"
        justify="space-between"
        h="80px"
        px="8"
        sx={headerProps}
      >
        <Logo h="40px" />

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
            sidebarIsOpen ? '0.5s ease-in-out 0.2s' : '0.2s ease-in-out 0.2s'
          }
        >
          <Content isLargeScreen={isLargeScreen} />
        </Flex>

        <SidebarButtons sidebarIsOpen={sidebarIsOpen} />
      </Flex>
    );
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
