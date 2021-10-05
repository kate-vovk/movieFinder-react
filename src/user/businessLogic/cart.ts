import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/user/api/cart';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';

const getNumberFromString = (str: string): string | undefined => {
  return str.split(' ').filter((item: string) => {
    return !Number.isNaN(Number(item));
  })[0];
};

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  try {
    const response = await getCart(userId);
    return response.data;
  } catch (err: any) {
    const errorCode = getNumberFromString(String(err.message));
    throw new Error(errorCode || String(err.message));
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
    const errorCode = getNumberFromString(String(err.message));
    throw new Error(errorCode || String(err.message));
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
    const errorCode = getNumberFromString(String(err.message));
    throw new Error(errorCode || String(err.message));
  }
};
