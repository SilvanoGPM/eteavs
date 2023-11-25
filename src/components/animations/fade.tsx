import {
  Fade as RawFade,
  FadeProps as RawFadeProps,
} from 'react-awesome-reveal';

export function Fade({
  children,
  cascade,
  delay = 0,
  triggerOnce = true,
  ...props
}: RawFadeProps) {
  return (
    <RawFade
      cascade={cascade}
      triggerOnce={triggerOnce}
      delay={delay}
      {...props}
    >
      {children}
    </RawFade>
  );
}
