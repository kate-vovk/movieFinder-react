import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addMovieToFavorites as addMovieToFavorite,
  deleteMovieFromFavorites,
  getUserFavorites,
} from '@/user/businessLogic/favorites';
import { IFavorites, IFavoritesMovieState } from '@/interfaces/favoritesInterface';

const initialState: IFavorites = { favoritesMovies: [], isFavoritesLoading: false };

export const setFavoritesMoviesToStore = createAsyncThunk(
  'favorites/getMovies',
  async (userId: string) => {
    return getUserFavorites(userId);
  },
);

export const addMovieToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async ({ userId, movieId }: IFavoritesMovieState) => {
    await addMovieToFavorite({ userId, movieId });
    return getUserFavorites(userId);
  },
);

export const removeMovieFromFavorites = createAsyncThunk(
  'favorites/removeMovieFromFavorites',
  async ({ userId, movieId }: IFavoritesMovieState) => {
    await deleteMovieFromFavorites({ userId, movieId });
    return getUserFavorites(userId);
  },
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFavoritesMoviesToStore.fulfilled, (state, action) => {
        state.favoritesMovies = action.payload;
      })
      .addCase(setFavoritesMoviesToStore.rejected, (state) => {
        state.isFavoritesLoading = false;
      })

      .addCase(addMovieToFavorites.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(addMovieToFavorites.fulfilled, (state, action) => {
        state.favoritesMovies = action.payload;
        state.isFavoritesLoading = false;
      })

      .addCase(removeMovieFromFavorites.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(removeMovieFromFavorites.fulfilled, (state, action) => {
        state.favoritesMovies = action.payload;
        state.isFavoritesLoading = false;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
