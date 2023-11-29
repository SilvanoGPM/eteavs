import { SystemStyleObject } from '@chakra-ui/react';

export interface MountSxParams {
  container?: SystemStyleObject;
  pagination?: SystemStyleObject;
  paginationBullet?: SystemStyleObject;
  paginationBulletActive?: SystemStyleObject;
  button?: SystemStyleObject;
  buttonNext?: SystemStyleObject;
  buttonBefore?: SystemStyleObject;
  buttonContent?: SystemStyleObject;
}

export function mountSx({
  container,
  pagination,
  paginationBullet,
  paginationBulletActive,
  button,
  buttonContent,
  buttonNext,
  buttonBefore,
}: MountSxParams = {}) {
  const swiperPagination = {
    padding: '0 12px',
    maxW: '70%',
    position: 'absolute',
    left: '50% !important',
    top: '10px !important',
    bottom: 'unset !important',
    transform: 'translateX(-50%)',
    ...pagination,
  };

  const swiperPaginationBullet = {
    background: 'black',
    width: '1rem',
    height: '1rem',
    borderRadius: '0.5rem',
    opacity: '0.3',
    ...paginationBullet,
  };

  const swiperPaginationBulletActive = {
    background: 'blue.900',
    opacity: '0.8',
    ...paginationBulletActive,
  };

  const swiperButton = {
    color: 'white',
    bg: 'blue.900',
    borderColor: 'blue.900',
    borderWidth: '1px',
    borderRadius: '50%',
    boxSize: { base: '25px', md: '50px' },
    position: 'absolute',
    zIndex: '10',
    top: { base: '10%', md: '50%' },
    ...button,

    '&::after': {
      fontSize: { base: 'x-small', md: 'lg' },
      buttonContent,
    },
  };

  return {
    '&': {
      margin: '0 !important',
      ...container,
    },

    '.swiper-pagination': {
      ...swiperPagination,

      '&-bullet': {
        ...swiperPaginationBullet,

        '&-active': swiperPaginationBulletActive,
      },
    },
    '.swiper-button': {
      '&-next': { ...swiperButton, ...buttonNext },
      '&-prev': { ...swiperButton, ...buttonBefore },
    },
  };
}
