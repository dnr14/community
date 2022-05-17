import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const NAME = 'likeSlice';

const initialState: LikeSliceInit = {
  likePks: [],
};

const likeSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    addLikePks: (state, { payload }: PayloadAction<number>) => {
      const set = new Set(state.likePks);
      if (set.has(payload)) set.delete(payload);
      else set.add(payload);
      state.likePks = Array.from(set);
    },
  },
});
export const { addLikePks } = likeSlice.actions;
export default likeSlice;
