import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { getMovies } from '@/businessLogic/movies';
import { getMovieByQuery } from '@/businessLogic/search-filter';
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

interface IQuery {
  selectParam: string;
  searchQuery: string;
  selectedGenres: string[];
  selectedCategories: string[];
  selectedCountries: string[];
}

export const getMoviesList = createAsyncThunk('search/getMovieList', async () => {
  return getMovies();
});

export const getMoviesListWithQuery = createAsyncThunk(
  'filtration/getFIlteredMoviesList',
  async ({
    selectParam,
    searchQuery,
    selectedGenres,
    selectedCategories,
    selectedCountries,
  }: IQuery) => {
    const path = createPath({
      selectParam,
      searchQuery,
      selectedGenres,
      selectedCategories,
      selectedCountries,
    });
    return getMovieByQuery(path);
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
      switch (action.payload.param) {
        // TODO temporary solution to store just 1 option/query in array(selectedGenres or selectedCategories or selectedCountries).
        // When radiobuttons will be replaced with checkboxes state.selectedGenres = [], state.selectedCategories = [], and state.selectedCountries = [] will be deleted
        case 'genres':
          state.selectedGenres = [];
          state.selectedGenres.push(action.payload.option);
          break;
        case 'categories':
          state.selectedCategories = [];
          state.selectedCategories.push(action.payload.option);
          break;
        case 'countries':
          state.selectedCountries = [];
          state.selectedCountries.push(action.payload.option);
          break;
        default:
          break;
      }
    },
    removeLastFilterOption(state, action) {
      switch (action.payload) {
        case 'genres':
          state.selectedGenres.pop();
          break;
        case 'categories':
          state.selectedCategories.pop();
          break;
        case 'countries':
          state.selectedCountries.pop();
          break;
        default:
          break;
      }
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
