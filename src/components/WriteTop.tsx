import BackIcon from 'common/BackIcon';
import Button from 'common/Button';
import CommunityTop from 'common/CommunityTop';
import Text from 'common/Text';
import useGoback from 'src/hooks/useGoback';

const WriteTop = () => {
  const handleGoback = useGoback();

  return (
    <CommunityTop>
      <BackIcon handleGoBack={handleGoback} />
      <Text
        text="글쓰기"
        lineHeight="21px"
        height="21px"
        left="45%"
        right="44.17%"
        top="calc(50% - 21px / 2 - 0.5px)"
      />
      <Button text="완료" width="64px" height="36px" top="10px" left="286px" />
    </CommunityTop>
  );
};

export default WriteTop;
