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
  const swiperPagination = pagination ?? {
    padding: '0 12px',
    maxW: '70%',
    position: 'absolute',
    left: '50% !important',
    bottom: '10px !important',
    transform: 'translateX(-50%)',
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
    background: 'green',
    opacity: '0.8',
    ...paginationBulletActive,
  };

  const swiperButton = {
    color: 'white',
    bg: 'green',
    borderColor: 'green',
    borderWidth: '1px',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    position: 'absolute',
    zIndex: '10',
    top: '50%',
    ...button,

    '&::after': {
      fontSize: 'md',
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