import { toast } from 'react-toastify';
import i18next from 'i18next';
import {
  addMovieToCart as addMovieToCartAPI,
  deleteMovieFromCart as deleteMovieFromCartAPI,
  getCart,
} from '@/user/api/cart';
import { ICartMovieState } from '@/interfaces/cartInterfaces';
import { IMovie } from '@/interfaces/movieInterface';
import HTTPService from '@/services/httpService';

export const getUserCart = async (userId: string): Promise<IMovie[]> => {
  // const response = await getCart(userId);
  const response = await HTTPService.get();
  console.error(`Problem: ${response}`);
  try {
    if (response.status === 200) {
      console.log(response.status);
      return response.data;
    };
  } catch (err: any) {
    console.error(`Problem: ${err}`);
    switch (response.status) {
      case 100:
        toast(i18next.t('AuthStatuses:100'));
        break;
      case 300:
      case 400:
        toast(`${JSON.parse(response.status).data} - ${i18next.t('AuthStatuses:400')}`, {
          autoClose: false,
        });
        break;
      case 401:
        toast(`${i18next.t('AuthStatuses:401')}`, {
          autoClose: false,
        });
        break;
      case 500:
        toast(i18next.t('AuthStatuses:500'));
        break;
      default:
        toast(i18next.t(err));
    }
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
