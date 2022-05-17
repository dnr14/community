import { CommonSwiperProp } from 'CommonSwiper';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import 'swiper/css';
import { Swiper } from 'swiper/react';

const CommonSwiper: FC<CommonSwiperProp> = ({
  children,
  spaceBetween,
  slidesPerView,
  top,
  left,
  swiperWidthOffset,
}) => {
  return (
    <CommonSwiperWrapper top={top} left={left} swiperWidthOffset={swiperWidthOffset}>
      <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
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
  & .swiper {
    width: calc(100% + ${({ swiperWidthOffset }) => swiperWidthOffset ?? 0});
  }
`;

export default CommonSwiper;
