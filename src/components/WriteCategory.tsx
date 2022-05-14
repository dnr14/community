import BaseLine from 'common/BaseLine';
import SelectBox from 'common/SelectBox';
import { useCallback, useEffect, useMemo } from 'react';
import { addCategory } from 'modules/slices/writeSlice';
import { useAppDispatch, useWriteCategorySelector } from 'modules/store';

const WriteCategory = () => {
  const dispatch = useAppDispatch();
  const { category } = useWriteCategorySelector();

  const categorys = useMemo<Category[]>(
    () => [
      {
        pk: '1',
        categoryName: '대선청원',
      },
      {
        pk: '2',
        categoryName: '자유글',
      },
      {
        pk: '3',
        categoryName: '질문/답변',
      },
      {
        pk: '4',
        categoryName: '뉴스',
      },
      {
        pk: '5',
        categoryName: '노하우',
      },
    ],
    [],
  );

  const categoryEls = useMemo(
    () =>
      categorys.map(({ categoryName, pk }) => (
        <li id={pk} key={pk}>
          {categoryName}
        </li>
      )),
    [categorys],
  );

  const handleCategoryOnChange = useCallback(
    (id: string) => {
      const category = categorys[Number(id) - 1];
      dispatch(addCategory(category));
    },
    [dispatch, categorys],
  );

  useEffect(() => {
    if (category === null) dispatch(addCategory(categorys[0]));
  }, [category, categorys, dispatch]);

  return (
    <>
      <SelectBox
        getSelectedId={handleCategoryOnChange}
        defaultValue={categorys[0].categoryName}
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
