import WriteTop from 'components/WriteTop';
import BaseLine from 'src/components/common/BaseLine';
import styled from 'styled-components';

const Write = () => (
  <Container>
    <WriteTop />
    <BaseLine top="56px" />
  </Container>
);

const Container = styled.section`
  width: 100%;
  height: 680px;
  position: absolute;
`;

export default Write;
