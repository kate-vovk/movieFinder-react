import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/user/api/cart';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';
import CustomError from '@/utils/customError';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  try {
    const response = await getCart(userId);
    return response.data;
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
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
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
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
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
  }
};
