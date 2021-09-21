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

const initialState: ICart = { movies: [], isLoading: false };

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
    alert(`userId: ${userId}`);
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
      .addCase(setCartMoviesToStore.rejected, (state) => {
        toast(i18next.t('CartStatuses:noCart'));
        state.isLoading = false;
      })

      .addCase(addMovieToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })

      .addCase(removeMovieFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(sendData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      });
  },
});

export const cartReducer = cartSlice.reducer;
