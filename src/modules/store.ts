import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import reducers from './reducers';
const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: reducers,
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useWriteCategorySelector = () =>
  useTypedSelector(
    ({ write }) => write,
    ({ category: prevCate }, { category: currentCate }) => prevCate?.categoryPk === currentCate?.categoryPk,
  );
export { useAppDispatch, useTypedSelector, useWriteCategorySelector };

export default store;
