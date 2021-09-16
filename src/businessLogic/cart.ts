import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/api/cart';
import { convertToCamelCase } from '@/utils/conversionToCamelCase';
import { IMovie, ICartMovieState } from '@/utils/interfaces/cartInterfaces';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  const { data } = await getCart(userId);
  return convertToCamelCase(data);
};

export const addMovieToCart = async ({
  movieId,
  userId,
  period,
  quality,
}: ICartMovieState): Promise<string> => {
  const { data } = await addMovieToCartAPI({ movieId, userId, period, quality });
  return data;
};

export const deleteMovieFromCart = async ({
  movieId,
  userId,
}: ICartMovieState): Promise<string> => {
  const { data } = await deleteMovieFromCartAPI({
    movieId,
    userId,
  });
  return data;
};
