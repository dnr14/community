import BaseLine from 'common/BaseLine';
import SelectBox from 'common/SelectBox';
import { useCallback, useEffect, useMemo } from 'react';
import { addCategory } from 'modules/slices/writeSlice';
import { useAppDispatch, useWriteCategorySelector } from 'modules/store';

const WriteCategory = () => {
  const dispatch = useAppDispatch();
  const { category } = useWriteCategorySelector();

  const CATEGORIES = useMemo<Category[]>(
    () => [
      {
        categoryPk: 1,
        categoryCode: 'PETITION',
        categoryName: '대선청원',
      },
      {
        categoryPk: 2,
        categoryCode: 'FREE',
        categoryName: '자유글',
      },
      {
        categoryPk: 3,
        categoryCode: 'QNA',
        categoryName: '질문/답변',
      },
      {
        categoryPk: 4,
        categoryCode: 'NEWS',
        categoryName: '뉴스',
      },
      {
        categoryPk: 5,
        categoryCode: 'TIP',
        categoryName: '노하우',
      },
    ],
    [],
  );

  const categoryEls = useMemo(
    () =>
      CATEGORIES.map(({ categoryName, categoryPk }) => (
        <li id={String(categoryPk)} key={categoryPk}>
          {categoryName}
        </li>
      )),
    [CATEGORIES],
  );

  const handleCategoryOnChange = useCallback(
    (id: string) => {
      const category = CATEGORIES[Number(id) - 1];
      dispatch(addCategory(category));
    },
    [dispatch, CATEGORIES],
  );

  useEffect(() => {
    if (category === null) dispatch(addCategory(CATEGORIES[0]));
  }, [category, CATEGORIES, dispatch]);

  return (
    <>
      <SelectBox
        getSelectedId={handleCategoryOnChange}
        defaultValue={CATEGORIES[0].categoryName}
        left="20px"
        top="68px"
        height="24px"
        width="71px"
      >
        {categoryEls}
      </SelectBox>
      <BaseLine top="102px" />
    </>
  );
};

export default WriteCategory;
