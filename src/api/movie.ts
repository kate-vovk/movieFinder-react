import { SERVER_PATHS } from '@/constants';
import HTTPService from '@/services/httpService';

export const getMovie = (movieId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?id=${movieId}`);
};
