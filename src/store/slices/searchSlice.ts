import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { getMovies } from '@/businessLogic/movies';
import { getDataFromApi } from '@/api/search';
import { searchOption } from '@/utils/interfaces/searchOption';

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

export const getMoviesList = createAsyncThunk('search/getMovieList', async () => {
  return getMovies();
});

export const getMoviesListWithQuery = createAsyncThunk(
  'search/getMovieListWithQuery',
  async ({ selectParam, searchQuery }: ISearchQuery) => {
    let querySelectParam = '';
    switch (selectParam) {
      case searchOption.initial:
        querySelectParam = 'initial';
        break;
      case searchOption.studio:
        querySelectParam = 'production_company';
        break;
      case searchOption.actor:
        querySelectParam = 'actor';
        break;
      default:
        break;
    }
    return getDataFromApi(`${querySelectParam}=${searchQuery}`);
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
  reducers: {
    setSelectParam(state, action) {
      state.selectParam = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.totalCount = action.payload?.length;
      })
      .addCase(getMoviesListWithQuery.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.totalCount = action.payload?.length;
        state.searchQuery = action.meta.arg.searchQuery;
        state.selectParam = action.meta.arg.selectParam;
      });
  },
});

export const searchReducer = searchSlice.reducer;
export const { setSelectParam } = searchSlice.actions;
