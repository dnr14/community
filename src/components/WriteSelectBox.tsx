import BaseLine from 'common/BaseLine';
import SelectBox from 'common/SelectBox';
import { useMemo } from 'react';

interface Category {
  text: string;
  id: string;
}

const WriteSelectBox = () => {
  const categorys = useMemo<Category[]>(() => {
    return [
      {
        id: 'PETITION',
        text: '대선청원',
      },
      {
        id: 'FREE',
        text: '자유글',
      },
      {
        id: 'QNA',
        text: '질문/답변',
      },
      {
        id: 'NEWS',
        text: '뉴스',
      },
      {
        id: 'TIP',
        text: '노하우',
      },
    ];
  }, []);

  const categoryEls = useMemo(
    () =>
      categorys.map(({ text, id }, idx) => (
        <li id={id} key={idx}>
          <span>{text}</span>
        </li>
      )),
    [categorys],
  );

  return (
    <>
      <SelectBox
        setSelectedId={id => {
          console.log(id);
        }}
        defaultValue={'대선청원'}
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

export default WriteSelectBox;
