import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/newsSlice';

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;