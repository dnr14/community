import WriteTop from 'components/WriteTop';
import WriteTitle from 'components/WriteTitle';
import WriteCategory from 'components/WriteCategory';
import styled from 'styled-components';
import WriteContent from 'components/WriteContent';
import WriteSwiper from 'components/WriteSwiper';

const Write = () => {
  return (
    <WriteContainer>
      <WriteTop />
      <WriteCategory />
      <WriteTitle />
      <WriteContent />
      <WriteSwiper />
    </WriteContainer>
  );
};

const WriteContainer = styled.section`
  position: absolute;
  width: 100%;
  height: 680px;
`;

export default Write;
