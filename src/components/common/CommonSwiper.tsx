import { CommonSwiperProp } from 'CommonSwiper';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import 'swiper/css';
import { Swiper } from 'swiper/react';

const CommonSwiper: FC<CommonSwiperProp> = ({
  children,
  spaceBetween,
  slidesPerView = 'auto',
  top,
  left,
  slidesOffsetAfter,
}) => {
  return (
    <CommonSwiperWrapper top={top} left={left}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slideToClickedSlide
        allowTouchMove
        slidesOffsetAfter={slidesOffsetAfter}
      >
        {children}
      </Swiper>
    </CommonSwiperWrapper>
  );
};

const CommonSwiperWrapper = styled.div<CommonSwiperProp>`
  width: calc(100% - ${({ left }) => left});
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  ${({ top, left }) => css`
    top: ${top};
    left: ${left};
  `}
`;

export default CommonSwiper;
