import HTTPService from '@/services/httpService';
import { CLIENT_PATHS } from '@/constants/constants';

export const getCart = async (userId: string | null): Promise<any> => {
  return HTTPService.get(`${CLIENT_PATHS.cart}?userId=${userId}`);
};

export const getMovie = async (movieId: string | string): Promise<any> => {
  return HTTPService.get(`${CLIENT_PATHS.movies}/${movieId}`);
};
