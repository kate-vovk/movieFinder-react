import { addCartToServerAPI, deleteMovieFromCartOnServerAPI, getCart } from '@/api/cart';
import { IMovie } from '@/utils/interfaces/cartInterfaces';

interface ICartParameters {
  movieId: string;
  userId: string;
}

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  const { data } = await getCart(userId);
  return data;
};

export const addCartToServer = async ({ movieId, userId }: ICartParameters): Promise<string> => {
  const { data } = await addCartToServerAPI({ movieId, userId });
  return data;
};

export const deleteMovieFromCartOnServer = async ({
  movieId,
  userId,
}: ICartParameters): Promise<string> => {
  const { data } = await deleteMovieFromCartOnServerAPI({
    movieId,
    userId,
  });
  return data;
};
