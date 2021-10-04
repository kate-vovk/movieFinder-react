import { toast } from 'react-toastify';
import i18next from 'i18next';
import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/user/api/cart';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';
// import HTTPService from '@/services/httpService';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  try {
    // const response = await HTTPService.get();
    const response = await getCart(userId);
    return response.data;
  } catch (err: any) {
    const arr = String(err)
      .split(' ')
      .filter((item: string) => {
        return !Number.isNaN(Number(item));
      });
    console.log(arr[0], typeof arr[0]);
    switch (arr[0] || String(err)) {
      case 'Error: Network Error':
        toast(i18next.t('Cart:Network Error happened'));
        break;
      case '400':
        toast(i18next.t('CartStatuses:400'));
        break;
      case '401':
        toast(i18next.t('CartStatuses:401'));
        break;
      case '500':
        toast(i18next.t('CartStatuses:500'));
        break;
      default:
        toast(err);
        break;
    }
    throw new Error(err);
  }
  return [];
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
