import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { PATHS } from '@/constants/constants';

export const getMovieList = createAsyncThunk('movies/getMovieList', async () => {
  const { data } = await HTTPService.get(PATHS.movies);
  return data;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export const moviesReducer = moviesSlice.reducer;
