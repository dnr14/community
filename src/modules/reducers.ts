import { combineReducers } from '@reduxjs/toolkit';
import writeSlice from './slices/writeSlice';
import { persistReducer } from 'redux-persist';
import sesstionStorage from 'redux-persist/lib/storage/session';
import listSlice from './slices/listSlice';
import scrollSlice from './slices/scrollSlice';

const persistConfig = {
  key: 'root',
  storage: sesstionStorage,
  whitelist: ['write', 'list', 'scroll'],
};

const reducers = combineReducers({
  write: writeSlice.reducer,
  list: listSlice.reducer,
  scroll: scrollSlice.reducer,
});

export default persistReducer(persistConfig, reducers);
