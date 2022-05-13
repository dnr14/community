import WriteTop from 'components/WriteTop';
import WriteSelectBox from 'src/components/WriteSelectBox';
import styled from 'styled-components';

const Write = () => (
  <Container>
    <WriteTop />
    <WriteSelectBox />
  </Container>
);

const Container = styled.section`
  width: 100%;
  height: 680px;
  position: absolute;
`;

export default Write;
