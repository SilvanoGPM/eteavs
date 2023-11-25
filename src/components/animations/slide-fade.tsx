import { Fade, FadeProps, Slide, SlideProps } from 'react-awesome-reveal';

type SlideFadeProps = SlideProps &
  FadeProps & {
    fadeDelayIncrease?: number;
  };

export function SlideFade({
  children,
  cascade,
  delay = 0,
  fadeDelayIncrease = 100,
  direction,
  triggerOnce = true,
  ...props
}: SlideFadeProps) {
  return (
    <Fade
      cascade={cascade}
      triggerOnce={triggerOnce}
      delay={delay + fadeDelayIncrease}
      {...props}
    >
      <Slide
        triggerOnce={triggerOnce}
        delay={delay}
        direction={direction}
        {...props}
      >
        {children}
      </Slide>
    </Fade>
  );
}
