import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { PATHS } from '@/constants/constants';
import { IMovieCard } from '@/utils/interfaces/movieInterfaces';

export const getMovieList = createAsyncThunk('movies/getMovieList', async () => {
  return HTTPService.get(PATHS.movies);
});

interface IState {
  movies: IMovieCard[];
  loading?: boolean;
  error?: null | boolean;
}

const initialState: IState = { movies: [], loading: true, error: null };

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.loading = false;
      })
      .addCase(getMovieList.rejected, (state) => {
        state.error = true;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
