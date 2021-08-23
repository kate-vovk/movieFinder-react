import { IMovieCard } from '@/constants/interfaces';
import { createSelector } from '@reduxjs/toolkit';

interface IState {
  moviesList: moviesList;
}

interface moviesList {
  movies: IMovieCard[];
}

const stateSelector = (state: IState): moviesList => state.moviesList;

export const movieListSelector = createSelector(stateSelector, (state) => state.movies);
