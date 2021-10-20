import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addMovieToFavorites as addMovieToFavorite,
  deleteMovieFromFavorites,
  getUserFavorites,
} from '@/user/businessLogic/favorites';
import { IFavorites, IFavoritesMovieState } from '@/interfaces/favoritesInterface';
import { DataStatus } from '@/interfaces/status';

const initialState: IFavorites = { favoritesMovies: [], status: DataStatus.initial };

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
      .addCase(setFavoritesMoviesToStore.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(setFavoritesMoviesToStore.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
          state.favoritesMovies = action.payload;
        }
      })
      .addCase(setFavoritesMoviesToStore.rejected, (state) => {
        state.status = DataStatus.error;
      })

      .addCase(addMovieToFavorites.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(addMovieToFavorites.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
          state.favoritesMovies = action.payload;
        }
      })
      .addCase(addMovieToFavorites.rejected, (state) => {
        state.status = DataStatus.error;
      })
      .addCase(removeMovieFromFavorites.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(removeMovieFromFavorites.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
          state.favoritesMovies = action.payload;
        }
      })
      .addCase(removeMovieFromFavorites.rejected, (state) => {
        state.status = DataStatus.error;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
