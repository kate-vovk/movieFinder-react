import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/interfaces/movieInterface';
import { getMovieByQuery } from '@/user/businessLogic/searchFilter';
import { createPath } from '@/utils/url';
import { DataStatus } from '@/interfaces/status';

interface ISearchState {
  movies: IMovie[];
  searchQuery: string;
  selectParam: string;
  filters: { [key: string]: string[] };
  status: string;
  totalCount: number;
  currentPage: number;
  moviePerPage: number;
}

interface IQuery {
  selectParam: string;
  searchQuery: string;
  filters: { [key: string]: string[] };
  currentPage: number;
  moviePerPage: number;
}

export const getMoviesListWithQuery = createAsyncThunk(
  'movies/getFilteredMoviesList',
  async ({ selectParam, searchQuery, filters, currentPage, moviePerPage }: IQuery) => {
    const path = createPath({
      selectParam,
      searchQuery,
      currentPage,
      moviePerPage,
      filters,
    });
    return getMovieByQuery(path);
  },
);

const initialState: ISearchState = {
  movies: [],
  searchQuery: '',
  selectParam: '',
  filters: {},
  status: DataStatus.initial,
  totalCount: 0,
  currentPage: 0,
  moviePerPage: 3,
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
    clearMovieState() {
      return initialState;
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
          state.movies = initialState.movies;
          state.totalCount = initialState.totalCount;
          state.currentPage = initialState.currentPage;
          state.moviePerPage = initialState.moviePerPage;
        } else {
          state.status = DataStatus.success;
          state.movies = action.payload.results;
          state.totalCount = action.payload.total;
          state.currentPage = action.meta.arg.currentPage;
          state.moviePerPage = action.meta.arg.moviePerPage;
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
  clearMovieState,
} = moviesSlice.actions;
