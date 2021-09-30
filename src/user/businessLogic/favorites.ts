import {
  addMovieToFavorites as addMovieToFavoritesAPI,
  deleteMovieFromFavorites as deleteMovieFromFavoritesAPI,
  getFavorites,
} from '@/user/api/favorites';
import { IFavoritesMovieState, TMovieFavorites } from '@/interfaces/favoritesInterface';

export const getUserFavorites = async (userId: string): Promise<TMovieFavorites[]> => {
  const { data } = await getFavorites(userId);
  return data;
};

export const addMovieToFavorites = async ({
  movieId,
  userId,
}: IFavoritesMovieState): Promise<string> => {
  const { data } = await addMovieToFavoritesAPI({ movieId, userId });
  return data;
};

export const deleteMovieFromFavorites = async ({
  movieId,
  userId,
}: IFavoritesMovieState): Promise<string> => {
  const { data } = await deleteMovieFromFavoritesAPI({
    movieId,
    userId,
  });
  return data;
};
