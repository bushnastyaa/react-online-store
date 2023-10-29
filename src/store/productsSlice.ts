import { createSlice } from '@reduxjs/toolkit';

export interface ProductsState {
  limit: number;
  category: string;
};

const initialState = {
  limit: 6,
  category: '',
} as ProductsState;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state) => {
      state.limit = state.limit + 10;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  }
});

export const { addProducts, changeCategory } = productsSlice.actions;

export default productsSlice.reducer;
