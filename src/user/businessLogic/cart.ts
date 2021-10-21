import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/user/api/cart';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';
import CustomError from '@/utils/customError';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getUserCart/failed'));
    const response = await getCart(userId);
    return response.data;
  } catch (err) {
    const error = {
      errorName: 'getUserCart/failed',
      failedFunctionFromBusinessLogic: getUserCart,
      params: userId,
      isMajorFlagMutable: true,
      route: '/cart',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};

export const addMovieToCart = async ({
  movieId,
  userId,
  period,
  quality,
}: ICartMovieState): Promise<string> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'addMovieToCart/failed'));
    const { data } = await addMovieToCartAPI({ movieId, userId, period, quality });
    return data;
  } catch (err) {
    const error = {
      errorName: 'addMovieToCart/failed',
      failedFunctionFromBusinessLogic: addMovieToCart,
      params: {
        movieId,
        userId,
        period,
        quality,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: '/cart',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};

export const deleteMovieFromCart = async ({
  movieId,
  userId,
}: ICartMovieState): Promise<string> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'deleteMovieFromCart/failed'));
    const { data } = await deleteMovieFromCartAPI({
      movieId,
      userId,
    });
    return data;
  } catch (err) {
    const error = {
      errorName: 'deleteMovieFromCart/failed',
      failedFunctionFromBusinessLogic: deleteMovieFromCart,
      params: {
        movieId,
        userId,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: '/cart',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};
