import { combineReducers } from '@reduxjs/toolkit';
import writeSlice from './slices/writeSlice';
import { persistReducer } from 'redux-persist';
import sesstionStorage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: sesstionStorage,
  whitelist: ['write'],
};

const reducers = combineReducers({
  write: writeSlice.reducer,
});

export default persistReducer(persistConfig, reducers);
