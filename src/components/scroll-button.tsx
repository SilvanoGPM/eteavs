import { Button, ButtonProps } from '@chakra-ui/react';

import { useUIStore } from '$stores/ui';
import { scrollToElement } from '$utils/scroll-to-element';

interface ScrollButtonProps extends ButtonProps {
  dataScroll: string;
  beforeScroll?: () => void;
}

export function ScrollButton({
  dataScroll,
  beforeScroll,
  children,
  ...props
}: ScrollButtonProps) {
  const { setHeaderInTop } = useUIStore();

  function handleScroll() {
    setHeaderInTop(false);
    beforeScroll?.();
    scrollToElement(dataScroll);
  }

  return (
    <Button onClick={handleScroll} {...props}>
      {children}
    </Button>
  );
}
