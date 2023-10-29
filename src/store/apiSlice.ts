import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { providesList } from "../utils/common";
import { BASE_URL } from "../utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Products', 'User', 'Categories'],
  endpoints: (builder) => ({
    getFilteredProducts: builder.query({
      query: (body) =>
        body.search == ''
          ? `/products?category_like=${body.category}&_start=0&_end=${body.limit}`
          : `/products?title_like=${body.search}`,
      providesTags: (result) => providesList(result, 'Products'),
    }),

    getProducts: builder.query<any, void>({
      query: () => '/products',
      providesTags: (result) => providesList(result, 'Products'),
    }),

    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result) =>
        result ? [result, { type: 'Products' }] : [{ type: 'Products' }],
    }),

    getCategory: builder.query<any, void>({
      query: () => '/categories',
      providesTags: (result) => providesList(result, 'Categories'),
    }),

    getUsers: builder.query({
      query: () => '/users',
      providesTags: (result) => providesList(result, 'User'),
    }),

    getSingleUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result) =>
        result ? [result, { type: 'User' }] : [{ type: 'User' }],
    }),

    addProductsInCart: builder.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          cart: {
            items: body.data,
          },
          generalSumInCart: body.sum,
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    removeProductsFromCart: builder.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          cart: {
            items: body.data,
          },
          generalSumInCart: body.sum,
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    incrementProductsInCart: builder.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          cart: {
            items: body.data,
          },
          generalSumInCart: body.sum,
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

  }),
});

export const { 
  useGetFilteredProductsQuery,
  useGetProductsQuery, 
  useGetProductQuery, 
  useGetCategoryQuery,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useAddProductsInCartMutation,
  useRemoveProductsFromCartMutation,
  useIncrementProductsInCartMutation,
} = apiSlice;
