import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/user/constants';
import HTTPService from '@/services/httpService';

export const getMovie = (movieId: string): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?id=${movieId}`);
};
