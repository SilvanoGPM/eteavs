import { Box, BoxProps } from '@chakra-ui/react';
import { A11y, EffectCreative, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { mountSx, MountSxParams } from './mount-sx';

export interface SlideSettings {
  spaceBetween?: number;
  slidesPerView?: number;
  draggable?: boolean;
  navigation?: boolean;
  loop?: boolean;
  pagination?: {
    clickable?: boolean;
  };
  className?: string;
}

interface SliderProps
  extends BoxProps,
    Pick<SwiperProps, 'onSlideChange' | 'initialSlide'> {
  settings: SlideSettings;
  swiperComponents?: MountSxParams;
}

export const Slide = SwiperSlide;

export function Slider({
  settings,
  style,
  children,
  swiperComponents,
  ...props
}: SliderProps) {
  return (
    <Box
      as={Swiper}
      style={style}
      modules={[Navigation, Pagination, A11y, EffectCreative]}
      sx={mountSx(swiperComponents)}
      {...props}
      {...settings}
    >
      {children}
    </Box>
  );
}
