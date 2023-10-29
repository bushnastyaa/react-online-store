import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
