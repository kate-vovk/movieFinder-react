import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { PATH } from '@/constants/contants';
import { IMovieCard } from '@/constants/interfaces';

interface IState {
  movies: IMovieCard[];
}

export const movieListRender = createAsyncThunk('movies/movieListRender', async () => {
  return HTTPService.get(PATH.movies);
});
const initialState: IState = { movies: [] };

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(movieListRender.fulfilled, (state, action) => {
      state.movies = action.payload.data;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
