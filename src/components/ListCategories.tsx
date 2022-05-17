import Text from 'components/common/Text';
import { useTypedSelector } from 'modules/store';
import { createFlexBox, themeColorPrimary, themeColorWhite } from 'assets/styles/theme';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import CommonSwiper from 'common/CommonSwiper';
import { memo } from 'react';
import starImg from 'assets/images/list/star.svg';
import { useDispatch } from 'react-redux';
import { setCategory } from 'modules/slices/listSlice';
import { useCallback } from 'react';

const ListCategories = () => {
  const { categories, category } = useTypedSelector(({ list }) => list);
  const dispatch = useDispatch();

  const handleCategoryOnClick = useCallback(
    (categoryPk: number) => () => dispatch(setCategory(categoryPk)),
    [dispatch],
  );

  return (
    <>
      <Text top="calc(50% - 32px/2 - 360.5px)" left="8.33%" height="32px" text="커뮤니티" fontSize="22px" />
      <CategoriesSwiperContainer>
        <CommonSwiper spaceBetween={4} top="86px" left="22px" slidesOffsetAfter={20}>
          {categories.map(({ categoryName, categoryPk }) => (
            <SwiperSlide
              key={categoryPk}
              className={category === categoryPk ? 'active' : ''}
              onClick={handleCategoryOnClick(categoryPk)}
            >
              {categoryPk === 7 && <img src={starImg} alt="starImg" />}
              {categoryName}
            </SwiperSlide>
          ))}
        </CommonSwiper>
      </CategoriesSwiperContainer>
    </>
  );
};

const CategoriesSwiperContainer = styled.div`
  & .swiper-slide {
    width: auto !important;
    height: 38px;
    box-sizing: border-box;
    border-radius: 4px;
    ${createFlexBox('center', 'center')};
    gap: 3px;
    padding: 12px 16px;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
    &.active {
      background: ${themeColorPrimary};
      color: ${themeColorWhite};
    }
  }
`;

export default memo(ListCategories);
