import PostWriteButton from 'components/PostWriteButton';
import ListCategories from 'components/ListCategories';
import Post from 'components/Post';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useTypedSelector, useAppDispatch } from 'modules/store';
import useThrottling from 'hooks/useThrottling';
import { SCROLL_TOP, setYOffset } from 'modules/slices/scrollSlice';
import { createFetchArticlesPayload, fetchPosts, setListSliceInit } from 'modules/slices/listSlice';
import PostSkeletons from 'components/PostSkeletons';
import withLoading from 'hoc/withLoading';
import useInfinityScroll from 'hooks/useInfinityScroll';

const List = () => {
  const { screenY } = useTypedSelector(({ scroll }) => scroll);
  const { category, posts, isEmpty, status, page, isLastPage } = useTypedSelector(({ list }) => list);
  const firstRender = useRef(true);
  const postRef = useRef<HTMLDivElement | null>(null);

  const throttling = useThrottling();
  const dispatch = useAppDispatch();

  const handleObserver = useInfinityScroll(page, status, _page => {
    if (!isLastPage) dispatch(fetchPosts(createFetchArticlesPayload(category, _page + 1)));
  });

  useEffect(() => {
    const handleScroll = ({ target }: Event) => {
      throttling(() => {
        const { scrollTop } = target as HTMLElement;
        dispatch(setYOffset(scrollTop));
      }, 400);
    };
    postRef.current?.addEventListener('scroll', handleScroll);
    return () => postRef.current?.removeEventListener('scroll', handleScroll);
  }, [dispatch, throttling]);

  /* 첫 호출 시 가져온다. */
  useEffect(() => {
    if (posts.length === 0 && firstRender.current && isEmpty) {
      dispatch(fetchPosts(createFetchArticlesPayload(category, page)));
    }
  }, [posts, isEmpty, page, category, dispatch]);

  /* 카테고리가 변경됬을때 새로 가져온다. */
  useEffect(() => {
    if (!firstRender.current) {
      dispatch(setListSliceInit());
      dispatch(setYOffset(SCROLL_TOP));
      dispatch(fetchPosts(createFetchArticlesPayload(category, 1)));
    }
  }, [category, dispatch]);

  useEffect(() => {
    if (screenY !== 0) postRef.current?.scrollTo({ top: screenY });
    if (screenY === SCROLL_TOP) postRef.current?.scrollTo({ top: 0 });
  }, [screenY]);

  useEffect(() => {
    if (firstRender.current) firstRender.current = false;
  }, []);

  return (
    <>
      <ListContainer isLoading={status === 'loading'}>
        <ListCategories />
        <PostWrapper ref={postRef}>
          {posts.length ? (
            posts.map((post, idx, { length }) => (
              <Post key={post.pk} post={post} ref={length - 3 === idx ? handleObserver : null} />
            ))
          ) : (
            <PostSkeletons />
          )}
        </PostWrapper>
        <PostWriteButton />
      </ListContainer>
    </>
  );
};

const ListContainer = withLoading(styled.section`
  position: relative;
  width: 360px;
  height: 821px;
`);

const PostWrapper = styled.div`
  height: calc(100% - 166px);
  position: relative;
  top: 166px;
  overflow-y: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default List;
