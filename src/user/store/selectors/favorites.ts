import { createSelector } from '@reduxjs/toolkit';
import { TMovieFavorites } from '@/interfaces/favoritesInterface';

interface IState {
  favorites: IFavorites;
}

interface IFavorites {
  favoritesMovies: TMovieFavorites[];
  status: string;
}

const stateSelector = (state: IState): IFavorites => state.favorites;

export const favoritesSelector = createSelector(stateSelector, (state) => state.favoritesMovies);
export const favoritesStatusSelector = createSelector(stateSelector, (state) => state.status);
