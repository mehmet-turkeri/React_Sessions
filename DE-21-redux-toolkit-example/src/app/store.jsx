import { configureStore } from '@reduxjs/toolkit';
import yetkiSlice from '../features/yetkiSlice';
import newsSlice from '../features/newsSlice';

const store = configureStore({
  reducer: {
    yetki: yetkiSlice,
    news: newsSlice,
  },
});
export default store;
