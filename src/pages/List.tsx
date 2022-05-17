import styled from 'styled-components';
import ListWriteButton from 'components/ListWriteButton';
import ListTop from 'components/ListTop';

const List = () => {
  return (
    <ListContainer>
      <ListTop />
      <ListWriteButton />
    </ListContainer>
  );
};

const ListContainer = styled.section`
  position: relative;
  width: 360px;
  height: 821px;
`;

export default List;
