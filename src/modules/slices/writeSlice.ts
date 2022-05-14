import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  contents: '',
  category: {
    name: '',
    pk: 0,
  },
};

const writeSlice = createSlice({
  name: 'writeSlice',
  initialState: initialState,
  reducers: {
    addTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },
  },
});
export const { addTitle } = writeSlice.actions;
export default writeSlice;
