import { addMovieToCartOnServerAPI, deleteMovieFromCartOnServerAPI, getCart } from '@/api/cart';
import {
  IAddMovieToCartParameters,
  IMovie,
  IRemoveMovieFromCartParameters,
} from '@/utils/interfaces/cartInterfaces';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  const { data } = await getCart(userId);
  return data;
};

export const addMovieToCartOnServer = async ({
  movieId,
  userId,
  period,
  quality,
}: IAddMovieToCartParameters): Promise<string> => {
  const { data } = await addMovieToCartOnServerAPI({ movieId, userId, period, quality });
  return data;
};

export const deleteMovieFromCartOnServer = async ({
  movieId,
  userId,
}: IRemoveMovieFromCartParameters): Promise<string> => {
  const { data } = await deleteMovieFromCartOnServerAPI({
    movieId,
    userId,
  });
  return data;
};
