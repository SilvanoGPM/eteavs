import { CloseSidebarButton } from './close-sidebar-button';
import { OpenSidebarButton } from './open-sidebar-button';

interface SidebarButtonsProps {
  sidebarIsOpen: boolean;
}

export function SidebarButtons({ sidebarIsOpen }: SidebarButtonsProps) {
  return (
    <>
      <CloseSidebarButton
        pos="absolute"
        right="8"
        top={sidebarIsOpen ? '4' : '-100'}
        zIndex="999"
        transition={
          sidebarIsOpen ? '0.5s ease-in-out 0.5s' : '0.1s ease-in-out'
        }
      />
      <OpenSidebarButton />
    </>
  );
}
