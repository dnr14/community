import WriteTop from 'components/WriteTop';
import WriteInput from 'components/WriteInput';
import WriteSelectBox from 'components/WriteSelectBox';
import styled from 'styled-components';
import WriteEditor from 'components/WriteEditor';
import WriteSwiper from 'components/WriteSwiper';

const Write = () => {
  return (
    <WriteContainer>
      <WriteTop />
      <WriteSelectBox />
      <WriteInput />
      <WriteEditor />
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
