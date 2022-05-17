import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const CATEGORIES = [
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

const initialState: WriteSliceInit = {
  title: '',
  content: '',
  category: CATEGORIES[0],
  categories: CATEGORIES,
  images: null,
};

const writeSlice = createSlice({
  name: 'writeSlice',
  initialState: initialState,
  reducers: {
    addTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },
    addCategory: (state, { payload }: PayloadAction<WriteSliceInit['category']>) => {
      state.category = payload;
    },
    addContent: (state, { payload }: PayloadAction<string>) => {
      state.content = payload;
    },
    addImages: (state, { payload }: PayloadAction<Image[]>) => {
      const { length } = payload;
      state.images = length ? payload : null;
    },
  },
});
export const { addTitle, addCategory, addContent, addImages } = writeSlice.actions;
export default writeSlice;
