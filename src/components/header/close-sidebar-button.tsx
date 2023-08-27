import { IconButtonProps } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';
import { useScrollLock } from '$hooks/use-scroll-lock';

import { SidebarButton } from './sidebar-button';

export function CloseSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { closeSidebar } = useUIStore();
  const { unlockScroll } = useScrollLock();

  function handleCloseSidebar() {
    closeSidebar();
    unlockScroll();
  }

  return (
    <SidebarButton
      {...props}
      aria-label="Fechar menu"
      icon={AiOutlineClose}
      onClick={handleCloseSidebar}
    />
  );
}
