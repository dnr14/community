import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import http from 'api/http';

const NAME = 'listSlice';
const CATEGORIES = [
  {
    categoryPk: 6,
    categoryCode: 'ALL',
    categoryName: '전체',
  },
  {
    categoryPk: 7,
    categoryCode: 'POPULAR',
    categoryName: '인기글',
  },
  {
    categoryPk: 1,
    categoryCode: 'PETITION',
    categoryName: '대선청원',
  },
  {
    categoryPk: 2,
    categoryCode: 'FREE',
    categoryName: '자유글',
  },
  {
    categoryPk: 3,
    categoryCode: 'QNA',
    categoryName: '질문/답변',
  },
  {
    categoryPk: 4,
    categoryCode: 'NEWS',
    categoryName: '뉴스',
  },
  {
    categoryPk: 5,
    categoryCode: 'TIP',
    categoryName: '노하우',
  },
];
const initialState: ListSliceInit = {
  category: 6,
  categories: CATEGORIES,
  page: 1,
  status: 'idle',
  isEmpty: true,
  isLastPage: false,
  posts: [],
};

const createEndPoint = (categoryPk: ListSliceInit['category'], page: number): string => {
  let url = `/posts?_sort=writtenAt&_order=desc&_page=${page}`;

  if (categoryPk === 7) {
    url += '&viewCount_gte=100';
  } else if (categoryPk < 6) {
    url += `&categoryPk=${categoryPk}`;
  }
  return url;
};

export const createFetchArticlesPayload: CreateFetchArticlesPayloadFunc = (categoryPk, page) => ({
  categoryPk,
  page,
});

export const fetchPosts = createAsyncThunk<FetchPostThunkReturn, FetchPostsThunkPayload>(
  `${NAME}/GET/POSTS`,
  async ({ categoryPk, page }) => {
    const posts = await http.get<Post[]>(createEndPoint(categoryPk, page));

    /* 상태가 바로 변하는걸 방지하기위해 딜레이를 주었습니다. */
    const delay = (time: number) => new Promise(res => setTimeout(res, time));
    await delay(500);

    return {
      posts,
      page,
    };
  },
);

const listSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<number>) => {
      state.category = payload;
    },
    setListSliceInit: state => {
      state.isEmpty = true;
      state.isLastPage = false;
      state.page = 1;
      state.posts = [];
      state.status = 'idle';
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        const { page, posts } = payload;
        state.status = 'success';

        if (posts.length === 0) {
          state.isLastPage = true;
        } else {
          state.posts = [...state.posts, ...payload.posts];
          state.page = page;
        }
      })
      .addCase(fetchPosts.rejected, state => {
        state.status = 'failed';
      }),
});
export const { setCategory, setListSliceInit } = listSlice.actions;
export default listSlice;
