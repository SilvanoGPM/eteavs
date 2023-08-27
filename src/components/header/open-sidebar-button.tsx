import { IconButtonProps } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';
import { useScrollLock } from '$hooks/use-scroll-lock';

import { SidebarButton } from './sidebar-button';

export function OpenSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { openSidebar } = useUIStore();
  const { lockScroll } = useScrollLock();

  function handleOpenSidebar() {
    openSidebar();
    lockScroll();
  }

  return (
    <SidebarButton
      {...props}
      aria-label="Abrir menu"
      icon={AiOutlineMenu}
      onClick={handleOpenSidebar}
    />
  );
}
