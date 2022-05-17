import { Link } from 'react-router-dom';
import Button from 'common/Button';
import fingerWriteImg from 'assets/images/list/fingerWrite.svg';
import { memo } from 'react';

const PostWriteButton = () => {
  return (
    <Link to={'/community/post/new'}>
      <Button width="100px" height="52px" top="753px" left="244px">
        글쓰기
        <img src={fingerWriteImg} alt="fingerWriteImg" />
      </Button>
    </Link>
  );
};

export default memo(PostWriteButton);
