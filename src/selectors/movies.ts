import { createSelector } from '@reduxjs/toolkit';
import { IMovie } from '@/utils/interfaces/cartInterfaces';

interface ISearchState {
  movies: ISearchList;
}

interface ISearchList {
  movies: IMovie[];
  movieCount: number;
  searchQuery: string;
  selectParam: string;
  filters: { [key: string]: string[] };
  // selectedGenres: string[];
  // selectedCategories: string[];
  // selectedCountries: string[];
}

const stateSelector = (state: ISearchState): ISearchList => state.movies;

export const movieListSelector = createSelector(stateSelector, (state) => state.movies);
export const movieSearchSelector = createSelector(stateSelector, (state) => state.selectParam);

export const moviesSelector = createSelector(stateSelector, (state) => state);
