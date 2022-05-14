import { combineReducers } from '@reduxjs/toolkit';
import writeSlice from './slices/writeSlice';

const reducers = combineReducers({
  write: writeSlice.reducer,
});

export default reducers;
