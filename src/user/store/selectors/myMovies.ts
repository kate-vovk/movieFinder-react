import { createSelector } from '@reduxjs/toolkit';
import { IOrder } from '@/interfaces/orderInterface';

interface IMyMoviesState {
  myMovies: IOrder[];
}
const stateSelector = (state: IMyMoviesState): IOrder[] => state.myMovies;

export const activeOrdersSelector = createSelector(stateSelector, (state) => state);
