import { LinkProps as ChakraLinkProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useScrollLock } from '$hooks/use-scroll-lock';
import { useUIStore } from '$stores/ui';
import { Replace } from '$utils/replace';

interface ActiveLinkProps extends Replace<ChakraLinkProps, { href: string }> {
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...props
}: ActiveLinkProps) {
  const { closeSidebar } = useUIStore();
  const { unlockScroll } = useScrollLock();

  const pathname = ''; // TODO: Arrumar isso

  function handleCloseSidebar() {
    closeSidebar();
    unlockScroll();
  }

  let isActive = false;

  if (
    (pathname === '' || pathname == '/') &&
    (props.href === '' || props.href === '/')
  ) {
    isActive = true;
  }

  if (shouldMatchExactHref && pathname === props.href) {
    isActive = true;
  }

  if (
    (!shouldMatchExactHref &&
      (pathname.startsWith(String(props.href)) ||
        pathname.startsWith(String(props.as)))) ||
    pathname.includes('#' + String(props.href) || String(props.as))
  ) {
    isActive = true;
  }

  const color = isActive ? 'blue.500' : 'white';

  return (
    <Link
      as={NextLink}
      color={color}
      onClick={handleCloseSidebar}
      fontWeight="semibold"
      fontSize="xl"
      {...props}
    >
      {children}
    </Link>
  );
}
