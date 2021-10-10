import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import * as cart from '@/user/businessLogic/cart';
import { ICart, ICartMovieState } from '@/interfaces/cartInterfaces';
import { stateStatus } from '@/user/constants/constants';
import { store } from '@/store';

// function actionToDispatch(action: string, params = {}): any {
//   return {
//     type: action,
//     payload: params,
//   };
// }

const initialState: ICart = {
  movies: [],
  error: [],
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
        // if (state.error.length !== 0) {
        // store.dispatch(actionToDispatch('errors/clearError'));
        state.error = [];
        // }
        // state.error = state.error.filter(
        //   ({ errorType }) => String(errorType) !== 'cart/getMovies/rejected',
        // );
        state.movies = action.payload;
      })
      .addCase(setCartMoviesToStore.rejected, (state, action) => {
        if (
          !state.error.map(({ message }): string => message).includes(String(action.error.message))
        ) {
          state.error.push({
            errorType: action.type,
            message: action.error.message,
            reducer: setCartMoviesToStore,
          });
        }
        state.status = stateStatus.error;
        // toast(i18next.t(`CartStatuses:${action.error.message}`));
      })

      .addCase(addMovieToCart.pending, (state) => {
        state.status = stateStatus.loading;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        // if (state.error.length !== 0) {
        //   store.dispatch(actionToDispatch('errors/clearError'));
        state.error = [];
        // }
        // state.error = state.error.filter(
        //   ({ errorType }) => String(errorType) !== 'cart/addToCart/rejected',
        // );
        state.movies = action.payload;
        if (action.payload.length === 0) {
          state.status = stateStatus.empty;
        } else {
          state.status = stateStatus.success;
        }
      })
      .addCase(addMovieToCart.rejected, (state, action) => {
        if (
          !state.error.map(({ message }): string => message).includes(String(action.error.message))
        ) {
          state.error.push({
            message: action.error.message,
            reducer: addMovieToCart,
          });
        }
        state.status = stateStatus.error;
        toast(i18next.t(`CartStatuses:${action.error.message}`));
      })

      .addCase(removeMovieFromCart.pending, (state) => {
        state.status = stateStatus.loading;
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        // if (state.error.length !== 0) {
        //   store.dispatch(actionToDispatch('errors/clearError'));
        state.error = [];
        // }
        // state.error = state.error.filter(
        //   ({ errorType }) => String(errorType) !== 'cart/removeMovie/rejected',
        // );
        state.movies = action.payload;
        if (action.payload.length === 0) {
          state.status = stateStatus.empty;
        } else {
          state.status = stateStatus.success;
        }
      })
      .addCase(removeMovieFromCart.rejected, (state, action) => {
        if (
          !state.error.map(({ message }): string => message).includes(String(action.error.message))
        ) {
          state.error.push({
            errorType: action.type,
            message: action.error.message,
            reducer: removeMovieFromCart,
          });
        }
        state.status = stateStatus.error;
        toast(i18next.t(`CartStatuses:${action.error.message}`));
      });
  },
});

export const { clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
