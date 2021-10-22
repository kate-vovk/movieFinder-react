import { createSelector } from '@reduxjs/toolkit';
import { IMovie } from '@/interfaces/movieInterface';

interface ISearchState {
  movies: ISearchList;
}

interface ISearchList {
  movies: IMovie[];
  searchQuery: string;
  selectParam: string;
  filters: { [key: string]: string[] };
  status: string;
  totalCount: number;
  currentPage: number;
  moviePerPage: number;
}

const stateSelector = (state: ISearchState): ISearchList => state.movies;

export const movieListSelector = createSelector(stateSelector, (state) => state.movies);
export const movieSearchSelector = createSelector(stateSelector, (state) => state.selectParam);
export const movieQuerySelector = createSelector(stateSelector, (state) => state.searchQuery);
export const movieStatusSelector = createSelector(stateSelector, (state) => state.status);
export const movieCurrentPageSelector = createSelector(stateSelector, (state) => state.currentPage);
export const movieMoviePerPageSelector = createSelector(
  stateSelector,
  (state) => state.moviePerPage,
);

export const moviesSelector = createSelector(stateSelector, (state) => state);
