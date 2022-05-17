import { Link } from 'react-router-dom';
import Button from 'common/Button';
import Empty from 'common/Empty';
import { FC } from 'react';

const HomeEmpty: FC<HomeEmptyProp> = ({ text }) => {
  return (
    <>
      <Empty text={text} />
      <Link to={'/community/list'}>
        <Button width="100px" height="40px" top="50px" left="calc(50% - 50px)">
          홈으로
        </Button>
      </Link>
    </>
  );
};

export default HomeEmpty;
