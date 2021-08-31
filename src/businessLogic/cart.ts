import { getCart, getMovie as getMovieObj } from '@/api/cart';
import { ICartData, IMovie } from '@/utils/interfaces/cartInterfaces';

export const getUserCart = async (userId: string | null): Promise<ICartData> => {
  const { data } = await getCart(userId);
  return data[0];
};

export const getMovie = async (movieId: string | string): Promise<IMovie> => {
  const { data } = await getMovieObj(movieId);
  return data;
};
