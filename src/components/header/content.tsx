import { Logo } from './logo';
import { Navbar } from './navbar';

export interface ContentProps {
  isLargeScreen: boolean;
}

export function Content({ isLargeScreen }: ContentProps) {
  return (
    <>
      {isLargeScreen && <Logo />}
      <Navbar isLargeScreen={isLargeScreen} />
    </>
  );
}
