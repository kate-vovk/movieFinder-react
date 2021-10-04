import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import * as cart from '@/user/businessLogic/cart';
import { ICart, ICartMovieState } from '@/interfaces/cartInterfaces';

toast.configure();

const initialState: ICart = { movies: [], isLoading: false };

export const setCartMoviesToStore = createAsyncThunk('cart/getMovies', async (userId: string) => {
  return cart.getUserCart(userId);
});

export const addMovieToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, movieId, period, quality }: ICartMovieState) => {
    await cart.addMovieToCart({ userId, movieId, period, quality });
    return cart.getUserCart(userId);
  },
);

export const removeMovieFromCart = createAsyncThunk(
  'cart/removeMovie',
  async ({ userId, movieId }: ICartMovieState) => {
    await cart.deleteMovieFromCart({ userId, movieId });
    return cart.getUserCart(userId);
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart() {
      return initialState;
    },
  },
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
      });
  },
});

export const { clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
