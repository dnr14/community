import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: WriteSliceInit = {
  title: '',
  content: '',
  category: null,
  errors: {
    category: null,
    content: null,
    title: null,
  },
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
  },
});
export const { addTitle, addCategory } = writeSlice.actions;
export default writeSlice;
