import WriteTop from 'components/WriteTop';
import WriteTitle from 'components/WriteTitle';
import WriteCategory from 'components/WriteCategory';
import styled from 'styled-components';
import WriteContent from 'components/WriteContent';
import WriteImages from 'components/WriteImages';

const Write = () => {
  return (
    <WriteContainer>
      <WriteTop />
      <WriteCategory />
      <WriteTitle />
      <WriteContent />
      <WriteImages />
    </WriteContainer>
  );
};

const WriteContainer = styled.section`
  position: relative;
  width: 360px;
  height: 680px;
`;

export default Write;
