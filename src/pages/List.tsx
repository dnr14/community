import styled from 'styled-components';
import PostWriteButton from 'components/PostWriteButton';
import ListCategories from 'components/ListCategories';

const List = () => {
  return (
    <ListContainer>
      <ListCategories />
      <PostWriteButton />
    </ListContainer>
  );
};

const ListContainer = styled.section`
  position: relative;
  width: 360px;
  height: 821px;
`;

export default List;
