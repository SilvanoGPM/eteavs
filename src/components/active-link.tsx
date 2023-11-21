import { Link } from '@chakra-ui/next-js';
import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  let isActive = false;

  if (
    (pathname === '' || pathname == '/') &&
    (props.href === '' || props.href === '/')
  ) {
    isActive = true;
  }

  if (
    shouldMatchExactHref &&
    (pathname === props.href || pathname === props.as)
  ) {
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
      color={color}
      onClick={closeSidebar}
      fontWeight="semibold"
      fontSize="xl"
      {...props}
    >
      {children}
    </Link>
  );
}
