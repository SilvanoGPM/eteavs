import { Icon, Stack } from '@chakra-ui/react';
import {
  PiCameraFill,
  PiHouseLineFill,
  PiInfoFill,
  PiNewspaperFill,
  PiPencilSimpleFill,
} from 'react-icons/pi';

import { ActiveLink } from '$components/active-link';

import { ContentProps } from './content';

const links = [
  {
    href: '/#home',
    text: 'Página Inicial',
    icon: PiHouseLineFill,
    shouldMatchExactHref: true,
  },

  { href: '/#sobre', text: 'Sobre Nós', icon: PiInfoFill },
  { href: '/#ensino', text: 'Ensino', icon: PiPencilSimpleFill },
  { href: '/#blog', text: 'Blog', icon: PiNewspaperFill },
  { href: '/#galeria', text: 'Galeria', icon: PiCameraFill },
];

export function Navbar({ isLargeScreen }: ContentProps) {
  return (
    <Stack
      direction={isLargeScreen ? 'row' : 'column'}
      gap="4"
      align="center"
      as="nav"
      p="4"
    >
      {links.map((link) => (
        <ActiveLink
          key={link.href}
          href={link.href}
          shouldMatchExactHref={link.shouldMatchExactHref}
          display="flex"
          alignItems="center"
          fontSize={{ base: '2xl', md: '3xl', lg: 'xl' }}
        >
          <Icon as={link.icon} mr="1" />
          {link.text}
        </ActiveLink>
      ))}
    </Stack>
  );
}
