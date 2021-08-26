import { IMovieCard } from '@/utils/interfaces/movieInterfaces';
import { createSelector } from '@reduxjs/toolkit';

interface IState {
  moviesList: moviesList;
}

interface moviesList {
  movies: IMovieCard[];
  loading?: boolean;
  error?: null | boolean;
}

const stateSelector = (state: IState): moviesList => state.moviesList;

export const movieListSelector = createSelector(stateSelector, (state) => state.movies);
export const moviesStateSelector = createSelector(stateSelector, (state) => state);
