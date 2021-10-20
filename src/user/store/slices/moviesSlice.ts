import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/interfaces/movieInterface';
import { getMovieByQuery } from '@/user/businessLogic/searchFilter';
import { createPath } from '@/utils/url';
import { DataStatus } from '@/interfaces/status';

interface ISearchState {
  movies: IMovie[];
  totalCount: number;
  searchQuery: string;
  selectParam: string;
  filters: { [key: string]: string[] };
  status: string;
}

interface IQuery {
  selectParam: string;
  searchQuery: string;
  filters: { [key: string]: string[] };
}

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
  status: DataStatus.initial,
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
    clearMovieState(state) {
      state.searchQuery = '';
      state.selectParam = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesListWithQuery.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(getMoviesListWithQuery.fulfilled, (state, action) => {
        if (action.payload.results.length === 0) {
          state.status = DataStatus.empty;
          state.movies = [];
          state.totalCount = 0;
        } else {
          state.status = DataStatus.success;
          state.movies = action.payload.results;
          state.totalCount = action.payload.total;
        }
      })
      .addCase(getMoviesListWithQuery.rejected, (state) => {
        state.status = DataStatus.error;
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
  clearMovieState,
} = moviesSlice.actions;
