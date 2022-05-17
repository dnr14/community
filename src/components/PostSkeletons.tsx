import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import styled from 'styled-components';
import BaseLine from 'common/BaseLine';

const PostSkeletons = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, idx) => (
        <React.Fragment key={idx}>
          <PostContainer>
            <Skeleton variant="circular" height={32} width={32} />
            <Skeleton variant="text" height={42} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="rectangular" height={160} />
            <Skeleton variant="text" height={32} width={150} />
          </PostContainer>
          <BaseLine height="6px" />
        </React.Fragment>
      ))}
    </>
  );
};

const PostContainer = styled.div`
  padding: 0px 26px 23px 26px;
  &:nth-child(n + 2) {
    padding-top: 26px;
  }
`;

export default PostSkeletons;
