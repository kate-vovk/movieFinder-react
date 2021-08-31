import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { CLIENT_PATHS } from '@/constants/constants';
import { getUserCart } from '@/businessLogic/cart';
import { toast } from 'react-toastify';
import { ICartData } from '@/utils/interfaces/cartInterfaces';

toast.configure();

const initialState: ICartData = { movies: [], userId: null, id: null };

export const getCartMovies = createAsyncThunk('cart/getMovies', async (userId: string | null) => {
  return getUserCart(userId);
});

export const addMovieToCart = createAsyncThunk(
  'cart/addToCart',
  async ({
    userId,
    movieId,
    id,
    movies,
  }: {
    userId: string | null;
    movieId: string;
    id: string | null;
    movies: string[];
  }) => {
    // TODO: DELETE query will be removed when back end will be ready
    await HTTPService.delete(`${CLIENT_PATHS.cart}/${id}`);
    await HTTPService.post(`${CLIENT_PATHS.cart}`, false, {
      userId,
      movies: [...movies, movieId],
    });
    return movieId;
  },
);

export const removeMovieFromCart = createAsyncThunk(
  'cart/removeMovie',
  async ({
    userId,
    movieId,
    id,
    movies,
  }: {
    userId: string | null;
    movieId: string;
    id: string | null;
    movies: string[];
  }) => {
    const newMoviesArray = movies.filter((mId: string) => mId !== movieId);
    // TODO: DELETE query will be removed when back end will be ready
    await HTTPService.delete(`${CLIENT_PATHS.cart}/${id}`);
    await HTTPService.post(`${CLIENT_PATHS.cart}`, false, {
      userId,
      movies: newMoviesArray,
    });
    return newMoviesArray;
  },
);

export const sendData = createAsyncThunk(
  'cart/sendData',
  async ({ userId, moviesIds }: { userId: string; moviesIds: string[] }) => {
    alert(JSON.stringify({ userId, moviesIds }));
    const cart = await getUserCart(userId);
    await HTTPService.put({ ...cart, movies: [] }, `${CLIENT_PATHS.cart}/${cart.id}`);
    return [];
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartMovies.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getCartMovies.rejected, () => {
        toast('No cart for current user exists');
      })
      .addCase(removeMovieFromCart.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(addMovieToCart.fulfilled, (state, action) => {
        state.movies = [...state.movies, action.payload];
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export const cartReducer = cartSlice.reducer;
