import { createSelector } from '@reduxjs/toolkit';
import { IMovie } from '@/utils/interfaces/cartInterfaces';

interface ISearchState {
  search: ISearchList;
}

interface ISearchList {
  movies: IMovie[];
  movieCount: number;
  searchQuery: string;
  selectParam: string;
}

const stateSelector = (state: ISearchState): ISearchList => state.search;

export const movieListSelector = createSelector(stateSelector, (state) => state.movies);
export const movieSearchSelector = createSelector(stateSelector, (state) => state.selectParam);
