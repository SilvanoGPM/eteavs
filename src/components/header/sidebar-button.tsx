import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { Replace } from '$utils/replace';

export function SidebarButton({
  onClick,
  icon,
  ...props
}: Replace<IconButtonProps, { icon: IconType }>) {
  return (
    <IconButton
      {...props}
      colorScheme="blackAlpha"
      bg="transparent"
      color="white"
      fontSize="4xl"
      icon={<Icon as={icon} />}
      onClick={onClick}
    />
  );
}
