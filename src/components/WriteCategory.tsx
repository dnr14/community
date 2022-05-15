import BaseLine from 'common/BaseLine';
import SelectBox from 'common/SelectBox';
import { useCallback, useMemo } from 'react';
import { addCategory } from 'modules/slices/writeSlice';
import { useAppDispatch, useWriteCategorySelector } from 'modules/store';

const WriteCategory = () => {
  const dispatch = useAppDispatch();
  const {
    category: { categoryName },
    categories,
  } = useWriteCategorySelector();

  const categoryEls = useMemo(
    () =>
      categories.map(({ categoryName, categoryPk }) => (
        <li id={String(categoryPk)} key={categoryPk}>
          {categoryName}
        </li>
      )),
    [categories],
  );

  const handleCategoryOnChange = useCallback(
    (id: string) => {
      const category = categories[Number(id) - 1];
      dispatch(addCategory(category));
    },
    [dispatch, categories],
  );

  return (
    <>
      <SelectBox
        getSelectedId={handleCategoryOnChange}
        defaultValue={categoryName}
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
