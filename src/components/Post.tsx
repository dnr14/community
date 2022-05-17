import styled from 'styled-components';
import BaseLine from 'common/BaseLine';
import Profile from './Profile';
import Content from './Content';
import PostInformation from './PostInformation';
import { FC } from 'react';

const Post: FC<PostProps> = ({ post }) => {
  const {
    title,
    categoryName,
    content,
    imageUrl,
    writerNickName,
    writtenAt,
    writerProfileUrl,
    commentCount,
    likeCount,
    viewCount,
  } = post;

  return (
    <>
      <PostContainer>
        <Profile
          categoryName={categoryName}
          writerNickName={writerNickName}
          writtenAt={writtenAt}
          writerProfileUrl={writerProfileUrl}
        />
        <Content title={title} content={content} imageUrl={imageUrl} />
        <PostInformation commentCount={commentCount} likeCount={likeCount} viewCount={viewCount} />
      </PostContainer>
      <BaseLine height="6px" />
    </>
  );
};

const PostContainer = styled.div`
  padding: 0px 26px 23px 26px;
  &:nth-child(n + 2) {
    padding-top: 26px;
  }
`;

export default Post;
