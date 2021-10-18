import { createSelector } from '@reduxjs/toolkit';
import { IMyMovies } from '@/interfaces/orderInterface';

interface IMyMoviesState {
  myMovies: IMyMovies;
}
const stateSelector = (state: IMyMoviesState): IMyMovies => state.myMovies;

export const activeOrdersSelector = createSelector(stateSelector, (state) => state);
