import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import {
  addMovieToCart as addMovieToCartS,
  deleteMovieFromCart,
  getUserCart,
} from '@/businessLogic/cart';
import { ICart, ICartMovieState } from '@/utils/interfaces/cartInterfaces';

toast.configure();

const initialState: ICart = { movies: [] };

export const setCartMoviesToStore = createAsyncThunk('cart/getMovies', async (userId: string) => {
  return getUserCart(userId);
});

export const addMovieToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, movieId, period, quality }: ICartMovieState) => {
    await addMovieToCartS({ userId, movieId, period, quality });
    return getUserCart(userId);
  },
);

export const removeMovieFromCart = createAsyncThunk(
  'cart/removeMovie',
  async ({ userId, movieId }: ICartMovieState) => {
    await deleteMovieFromCart({ userId, movieId });
    return getUserCart(userId);
  },
);

export const sendData = createAsyncThunk(
  'cart/sendData',
  async ({ userId }: { userId: string }) => {
    // TODO will be implemented when Orders and MyMovies on server will be created
    // here we will make POST request to Orders and MyMovies on server.

    // TODO when query deleteAllMovieFromCart() will exist, it wil be used here
    alert(userId);
    return [];
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCartMoviesToStore.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(setCartMoviesToStore.rejected, () => {
        toast(i18next.t('CartStatuses:noCart'));
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export const cartReducer = cartSlice.reducer;
