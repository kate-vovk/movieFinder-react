import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { getMovieByQuery } from '@/businessLogic/search';

interface ISearchState {
  movies: IMovie[];
  totalCount: number;
  searchQuery: string;
  selectParam: string;
}

interface ISearchQuery {
  selectParam: string;
  searchQuery: string;
}

export const getMovieList = createAsyncThunk('search/getMovieList', async () => {
  return getMovieByQuery();
});

export const getMovieListWithQuery = createAsyncThunk(
  'search/getMovieListWithQuery',
  async ({ selectParam, searchQuery }: ISearchQuery) => {
    return getMovieByQuery(selectParam, searchQuery);
  },
);

const initialState: ISearchState = {
  movies: [],
  totalCount: 0,
  searchQuery: '',
  selectParam: 'initial',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.totalCount = action.payload.length;
      })
      .addCase(getMovieListWithQuery.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.totalCount = action.payload.length;
        state.searchQuery = action.meta.arg.searchQuery;
        state.selectParam = action.meta.arg.selectParam;
      });
  },
});

export const searchReducer = searchSlice.reducer;
