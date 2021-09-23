import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/interfaces/cartInterfaces';
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.totalCount = action.payload?.length;
      })
      .addCase(getMoviesListWithQuery.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.totalCount = action.payload?.length;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { setSelectedParam, setSearchOption, addFilterOption, removeLastFilterOption } =
  moviesSlice.actions;
