import { createSelector } from '@reduxjs/toolkit';
import { TMovieFavorites } from '@/interfaces/favoritesInterface';

interface IState {
  favorites: IFavorites;
}

interface IFavorites {
  favoritesMovies: TMovieFavorites[];
  isFavoritesLoading: boolean;
}

const stateSelector = (state: IState): IFavorites => state.favorites;

export const favoritesSelector = createSelector(stateSelector, (state) => state.favoritesMovies);
export const isFavoritesLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isFavoritesLoading,
);
