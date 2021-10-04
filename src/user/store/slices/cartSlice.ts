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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCartMoviesToStore.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(setCartMoviesToStore.rejected, (state, action) => {
        // toast(i18next.t('CartStatuses:noCart'));
        const { message } = action.error;
        console.log('message', message, typeof message);
        console.log(message);
        switch (message) {
          case 'Error: Network Error':
            toast(i18next.t('Cart:Network Error happened'));
            break;
          default:
            toast('Error');
        }
        // switch (message) {
        //   case 100:
        //     toast(i18next.t('AuthStatuses:100'));
        //     break;
        //   case 300:
        //   case 400:
        //     toast(`${JSON.parse(message).data} - ${i18next.t('AuthStatuses:400')}`, {
        //       autoClose: false,
        //     });
        //     break;
        //   case 401:
        //     toast(`${JSON.parse(message).data} - ${i18next.t('AuthStatuses:401')}`, {
        //       autoClose: false,
        //     });
        //     break;
        //   case 500:
        //     toast(i18next.t('AuthStatuses:500'));
        //     break;
        //   default:
        //     return [];
        // }
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

export const cartReducer = cartSlice.reducer;
