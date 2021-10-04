import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/interfaces/movieInterface';
import { getMovies } from '@/user/businessLogic/movies';
import { getMovieByQuery } from '@/user/businessLogic/searchFilter';
import { createPath } from '@/utils/url';

interface ISearchState {
  movies: IMovie[];
  totalCount: number;
  searchQuery: string;
  selectParam: string;
  filters: { [key: string]: string[] };
}

interface IQuery {
  selectParam: string;
  searchQuery: string;
  filters: { [key: string]: string[] };
}

export const getMoviesList = createAsyncThunk('search/getMovieList', async () => {
  return getMovies();
});

export const getMoviesListWithQuery = createAsyncThunk(
  'filtration/getFIlteredMoviesList',
  async ({ selectParam, searchQuery, filters }: IQuery) => {
    const path = createPath({
      selectParam,
      searchQuery,
      filters,
    });
    return getMovieByQuery(path);
  },
);

const initialState: ISearchState = {
  movies: [],
  totalCount: 0,
  searchQuery: '',
  selectParam: 'initial',
  filters: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedParam(state, action) {
      state.selectParam = action.payload;
    },
    setSearchOption(state, action) {
      state.searchQuery = action.payload;
    },
    addFilterOption(state, action) {
      state.filters[action.payload.filterParam] = [action.payload.filterOption];
    },
    removeLastFilterOption(state, action) {
      state.filters[action.payload].pop();
    },
    removeAllFilters(state) {
      state.filters = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalCount = action.payload.total;
      })
      .addCase(getMoviesListWithQuery.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalCount = action.payload.total;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
export const {
  setSelectedParam,
  setSearchOption,
  addFilterOption,
  removeLastFilterOption,
  removeAllFilters,
} = moviesSlice.actions;
