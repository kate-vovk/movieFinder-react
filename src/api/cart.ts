import HTTPService from '@/services/httpService';
import { CLIENT_PATHS } from '@/constants/constants';

export const getCart = async (userId: number | null): Promise<any> => {
  return HTTPService.get(`${CLIENT_PATHS.cart}?userId=${userId}`);
};

export const getMovie = async (movieId: number | string): Promise<any> => {
  return HTTPService.get(`${CLIENT_PATHS.movies}/${movieId}`);
};
