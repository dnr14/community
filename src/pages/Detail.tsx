import DetailTop from 'components/DetailTop';
import { useLocation } from 'react-router-dom';
import Profile from 'components/Profile';
import HomeEmpty from 'components/HomeEmpty';
import styled from 'styled-components';
import Content from 'components/Content';
import { createFlexBox, themeColorGray3 } from 'assets/styles/theme';
import likeThumbImg from 'assets/images/detail/likeThumb.svg';
import fullLikeThumbImg from 'assets/images/post/likeThumb.svg';
import talkImg from 'assets/images/detail/talk.svg';
import { useCallback, useEffect } from 'react';
import http from 'api/http';
import { useAppDispatch, usePostSelector, useTypedSelector } from 'modules/store';
import { setPostUpdate } from 'modules/slices/listSlice';
import { addLikePks } from 'modules/slices/likeSlice';
import useDebounce from 'hooks/useDebounce';

interface ViewCountBody {
  viewCount: number;
}
interface LikeCountBody {
  likeCount: number;
}

const Detail = () => {
  const { state } = useLocation<Post | undefined>();
  const { likePks } = useTypedSelector(({ like }) => like);
  const post = usePostSelector(state?.pk ?? 0);
  const dispatch = useAppDispatch();
  const debounce = useDebounce();

  const findPk = useCallback((_pk: number) => likePks.some(pk => _pk === pk), [likePks]);

  const handleLikeCountOnClick = useCallback(
    (pk: number, likeCount: number) => () => {
      debounce(() => {
        const _likeCount = findPk(pk) ? (likeCount -= 1) : (likeCount += 1);
        http.patch<LikeCountBody, Post>(`/posts/${pk}`, { likeCount: _likeCount }).then(post => {
          dispatch(addLikePks(post.pk ?? 0));
          dispatch(setPostUpdate(post));
        });
      }, 400);
    },
    [dispatch, debounce, findPk],
  );

  useEffect(() => {
    if (state) {
      const { pk, viewCount } = state;
      http
        .patch<ViewCountBody, Post>(`/posts/${pk}`, { viewCount: viewCount + 1 })
        .then(post => dispatch(setPostUpdate(post)));
    }
  }, [state, dispatch]);

  if (post) {
    const {
      pk = 0,
      categoryName,
      commentCount,
      content,
      imageUrl,
      likeCount,
      title,
      writerNickName,
      writerProfileUrl,
      writtenAt,
    } = post;

    return (
      <>
        <DetailTop />
        <DetailContainer>
          <Profile
            categoryName={categoryName}
            writerNickName={writerNickName}
            writerProfileUrl={writerProfileUrl}
            writtenAt={writtenAt}
          />
          <Content title={title} content={content} imageUrl={imageUrl} isDetail />
          <DetailInfomationContainer>
            <DetailInfomationWrapper onClick={handleLikeCountOnClick(pk, likeCount)}>
              <img src={findPk(pk) ? fullLikeThumbImg : likeThumbImg} alt="likeThumbImg" />
              {likeCount}
            </DetailInfomationWrapper>
            <DetailInfomationWrapper>
              <img src={talkImg} alt="talkImg" />
              {commentCount}
            </DetailInfomationWrapper>
          </DetailInfomationContainer>
        </DetailContainer>
      </>
    );
  }

  return <HomeEmpty text="없는 게시글입니다.😰" />;
};

const DetailContainer = styled.div`
  position: relative;
  top: 67px;
  padding: 0 26px;
  height: calc(100% - 67px);
  overflow-y: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const DetailInfomationContainer = styled.div`
  ${createFlexBox('flex-start', 'center')};
  gap: 10px;
  margin: 16px 0;
`;
const DetailInfomationWrapper = styled.div`
  ${createFlexBox('center', 'center')};
  background: #f8f8f8;
  border-radius: 6px;
  height: 32px;
  padding: 9px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  gap: 4px;
  color: ${themeColorGray3};
`;

export default Detail;
