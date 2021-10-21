import {
  addMovieToFavorites as addMovieToFavoritesAPI,
  deleteMovieFromFavorites as deleteMovieFromFavoritesAPI,
  getFavorites,
} from '@/user/api/favorites';
import { IFavoritesMovieState, TMovieFavorites } from '@/interfaces/favoritesInterface';
import CustomError from '@/utils/customError';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';

export const getUserFavorites = async (userId: string): Promise<TMovieFavorites[]> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getUserFavorites/failed'));
    const { data } = await getFavorites(userId);
    return data;
  } catch (err) {
    const error = {
      errorName: 'getUserFavorites/failed',
      failedFunctionFromBusinessLogic: getUserFavorites,
      params: userId,
      isMajorFlagMutable: true,
      route: '/user/1',
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};

export const addMovieToFavorites = async ({
  movieId,
  userId,
}: IFavoritesMovieState): Promise<string> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'addMovieToFavorites/failed'));
    const { data } = await addMovieToFavoritesAPI({ movieId, userId });
    return data;
  } catch (err) {
    const error = {
      errorName: 'addMovieToFavorites/failed',
      failedFunctionFromBusinessLogic: addMovieToFavorites,
      params: { movieId, userId },
      isMajor: false,
      isMajorFlagMutable: false,
      route: '/user/1',
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};

export const deleteMovieFromFavorites = async ({
  movieId,
  userId,
}: IFavoritesMovieState): Promise<string> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'deleteMovieFromFavorites/failed'));
    const { data } = await deleteMovieFromFavoritesAPI({
      movieId,
      userId,
    });
    return data;
  } catch (err) {
    const error = {
      errorName: 'deleteMovieFromFavorites/failed',
      failedFunctionFromBusinessLogic: deleteMovieFromFavorites,
      params: {
        movieId,
        userId,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: '/user/1',
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};
