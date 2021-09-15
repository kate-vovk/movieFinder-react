import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { getMovies } from '@/businessLogic/movies';
import { getDataFromApi } from '@/api/search';
import { createPath } from '@/utils/url';

interface ISearchState {
  movies: IMovie[];
  totalCount: number;
  searchQuery: string;
  selectParam: string;
  selectedGenres: string[];
  selectedCategories: string[];
  selectedCountries: string[];
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
    const path = createPath({ selectParam, searchQuery });
    return getDataFromApi(path);
  },
);

const initialState: ISearchState = {
  movies: [],
  totalCount: 0,
  searchQuery: '',
  selectParam: 'initial',
  selectedGenres: [],
  selectedCategories: [],
  selectedCountries: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelectedParam(state, action) {
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
export const { setSelectedParam } = searchSlice.actions;
