import CommunityTop from 'common/CommunityTop';
import useGoback from 'hooks/useGoback';
import BackIcon from 'common/BackIcon';
import Text from 'common/Text';

const DetailTop = () => {
  const handleGoback = useGoback();

  return (
    <CommunityTop>
      <BackIcon handleGoBack={handleGoback} />
      <Text text="글 목록으로" lineHeight="14px" height="14px" left="12.78%" top="calc(50% - 16px/2)" color="#B4B4B4" />
    </CommunityTop>
  );
};

export default DetailTop;
