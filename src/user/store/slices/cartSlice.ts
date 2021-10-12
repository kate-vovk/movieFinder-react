import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as cart from '@/user/businessLogic/cart';
import { ICart, ICartMovieState } from '@/interfaces/cartInterfaces';
import { DataStatus } from '@/interfaces/status';

const initialState: ICart = {
  movies: [],
  status: DataStatus.initial,
};

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
      .addCase(setCartMoviesToStore.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(setCartMoviesToStore.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
        }
        state.movies = action.payload;
      })
      .addCase(setCartMoviesToStore.rejected, (state) => {
        state.status = DataStatus.error;
      })

      .addCase(addMovieToCart.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        state.movies = action.payload;
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
        }
      })
      .addCase(addMovieToCart.rejected, (state) => {
        state.status = DataStatus.error;
      })

      .addCase(removeMovieFromCart.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        state.movies = action.payload;
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
        }
      })
      .addCase(removeMovieFromCart.rejected, (state) => {
        state.status = DataStatus.error;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
