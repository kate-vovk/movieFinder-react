import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { PATHS } from '@/constants/contants';
import { IMovieCard } from '@/utils/ interfaces/movieInterfaces';

interface IState {
  movies: IMovieCard[];
}

export const getMovieList = createAsyncThunk('movies/movieListRender', async () => {
  return HTTPService.get(PATHS.movies);
});
const initialState: IState = { movies: [] };

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.movies = action.payload.data;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
