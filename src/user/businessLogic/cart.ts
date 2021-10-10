import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/user/api/cart';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';
import CustomError from '@/services/CustomError';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  try {
    const response = await getCart(userId);
    return response.data;
  } catch (err: any) {
    throw new CustomError(err);
  }
};

export const addMovieToCart = async ({
  movieId,
  userId,
  period,
  quality,
}: ICartMovieState): Promise<string> => {
  try {
    const { data } = await addMovieToCartAPI({ movieId, userId, period, quality });
    return data;
  } catch (err: any) {
    throw new CustomError(err);
  }
};

export const deleteMovieFromCart = async ({
  movieId,
  userId,
}: ICartMovieState): Promise<string> => {
  try {
    const { data } = await deleteMovieFromCartAPI({
      movieId,
      userId,
    });
    return data;
  } catch (err: any) {
    throw new CustomError(err);
  }
};
