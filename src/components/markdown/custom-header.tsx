import { ReactNode } from 'react';
import { Heading } from '@chakra-ui/react';

interface CustomHeaderProps {
  children: ReactNode;
  level: number;
}

export function CustomHeader({ children, level }: CustomHeaderProps) {
  const as = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return <Heading as={as}>{children}</Heading>;
}
