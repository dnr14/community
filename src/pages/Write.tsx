import WriteTop from 'components/WriteTop';
import WriteInput from 'components/WriteInput';
import WriteSelectBox from 'components/WriteSelectBox';
import styled from 'styled-components';
import WriteEditor from 'src/components/WriteEditor';

const Write = () => {
  return (
    <WriteContainer>
      <WriteTop />
      <WriteSelectBox />
      <WriteInput />
      <WriteEditor />
    </WriteContainer>
  );
};

const WriteContainer = styled.section`
  width: 100%;
  height: 680px;
  position: absolute;
`;

export default Write;
