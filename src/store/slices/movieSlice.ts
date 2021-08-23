import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { PATH } from '@/constants/contants';

interface IMovie {
  id: number;
  title: string;
  description: string;
  cover: string;
}
interface IState {
  movies: IMovie[];
}

export const addToPage = createAsyncThunk('movies/addToPage', async () => {
  return HTTPService.get(PATH.movies);
});
const initialState: IState = { movies: [] };

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToPage.fulfilled, (state, action) => {
      state.movies = action.payload.data;
    });
  },
});

export const movieReducer = movieSlice.reducer;
