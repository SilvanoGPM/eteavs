import { Stack } from '@chakra-ui/react';

import { ActiveLink } from '$components/active-link';

import { ContentProps } from './content';

export function Navbar({ isLargeScreen }: ContentProps) {
  return (
    <Stack
      direction={isLargeScreen ? 'row' : 'column'}
      gap="4"
      align="center"
      as="nav"
      p="4"
    >
      <ActiveLink href="/" shouldMatchExactHref>
        Página Inicial
      </ActiveLink>

      <ActiveLink href="/sobre">Sobre Nós</ActiveLink>
      <ActiveLink href="/ensino">Ensino</ActiveLink>
      <ActiveLink href="/social">Social</ActiveLink>
      <ActiveLink href="/fale-conosco">Fale Conosco</ActiveLink>
    </Stack>
  );
}
