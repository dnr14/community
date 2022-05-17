import eyeImg from 'assets/images/post/eye.svg';
import likeThumbImg from 'assets/images/post/likeThumb.svg';
import talkImg from 'assets/images/post/talk.svg';
import { createFlexBox, themeColorGray3 } from 'assets/styles/theme';
import { FC } from 'react';
import styled from 'styled-components';

const PostInformation: FC<Pick<Post, 'likeCount' | 'viewCount' | 'commentCount'>> = ({
  commentCount,
  likeCount,
  viewCount,
}) => {
  return (
    <InformationContainer>
      <InformationWrapper>
        <img src={eyeImg} /> {viewCount}
      </InformationWrapper>
      <InformationWrapper>
        <img src={likeThumbImg} /> {likeCount}
      </InformationWrapper>
      <InformationWrapper>
        <img src={talkImg} /> {commentCount}
      </InformationWrapper>
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  ${createFlexBox('flex-start', 'center')};
  margin-top: 13px;
  gap: 16px;
`;
const InformationWrapper = styled.div`
  ${createFlexBox('flex-start', 'center')};
  gap: 5px;
  color: ${themeColorGray3};
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
`;
export default PostInformation;
