import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as cart from '@/user/businessLogic/cart';
import { ICart, ICartMovieState } from '@/interfaces/cartInterfaces';
import { stateStatus } from '@/user/constants/constants';

const initialState: ICart = {
  movies: [],
  status: stateStatus.initial,
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
        state.status = stateStatus.loading;
      })
      .addCase(setCartMoviesToStore.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = stateStatus.empty;
        } else {
          state.status = stateStatus.success;
        }
        state.movies = action.payload;
      })
      .addCase(setCartMoviesToStore.rejected, (state) => {
        state.status = stateStatus.error;
      })

      .addCase(addMovieToCart.pending, (state) => {
        state.status = stateStatus.loading;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        state.movies = action.payload;
        if (action.payload.length === 0) {
          state.status = stateStatus.empty;
        } else {
          state.status = stateStatus.success;
        }
      })
      .addCase(addMovieToCart.rejected, (state) => {
        state.status = stateStatus.error;
      })

      .addCase(removeMovieFromCart.pending, (state) => {
        state.status = stateStatus.loading;
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        state.movies = action.payload;
        if (action.payload.length === 0) {
          state.status = stateStatus.empty;
        } else {
          state.status = stateStatus.success;
        }
      })
      .addCase(removeMovieFromCart.rejected, (state) => {
        state.status = stateStatus.error;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
