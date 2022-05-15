import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import persistedReducer from './reducers';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useWriteCategorySelector = () =>
  useTypedSelector(
    ({ write }) => write,
    ({ category: prevCate }, { category: currentCate }) => prevCate.categoryPk === currentCate.categoryPk,
  );
const useWriteTitleSelector = () => useTypedSelector(({ write }) => write.title);
const useWriteContentSelector = () => useTypedSelector(({ write }) => write.content);
export { useAppDispatch, useTypedSelector, useWriteCategorySelector, useWriteTitleSelector, useWriteContentSelector };

export default store;
