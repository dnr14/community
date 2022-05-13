import WriteTop from 'components/WriteTop';
import WriteInput from 'components/WriteInput';
import WriteSelectBox from 'components/WriteSelectBox';
import styled from 'styled-components';

const Write = () => (
  <WriteContainer>
    <WriteTop />
    <WriteSelectBox />
    <WriteInput />
  </WriteContainer>
);

const WriteContainer = styled.section`
  width: 100%;
  height: 680px;
  position: absolute;
`;

export default Write;
