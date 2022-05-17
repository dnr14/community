import { combineReducers } from '@reduxjs/toolkit';
import writeSlice from './slices/writeSlice';
import { persistReducer } from 'redux-persist';
import sesstionStorage from 'redux-persist/lib/storage/session';
import listSlice from './slices/listSlice';
import scrollSlice from './slices/scrollSlice';
import likeSlice from './slices/likeSlice';
import localStorage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: sesstionStorage,
  whitelist: ['write', 'list', 'scroll'],
};

const likePersistConfig = {
  key: 'root:like',
  storage: localStorage,
};

const reducers = combineReducers({
  write: writeSlice.reducer,
  list: listSlice.reducer,
  scroll: scrollSlice.reducer,
  like: persistReducer<LikeSliceInit>(likePersistConfig, likeSlice.reducer),
});

export default persistReducer(persistConfig, reducers);
