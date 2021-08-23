import { createSelector } from '@reduxjs/toolkit';

interface IState {
  movieList: movieList;
}

interface movieList {
  movies: IMovie[];
}

interface IMovie {
  id: number;
  title: string;
  description: string;
  cover: string;
}

const stateSelector = (state: IState): movieList => state.movieList;

export const movieListSelector = createSelector(stateSelector, (state) => state.movies);
