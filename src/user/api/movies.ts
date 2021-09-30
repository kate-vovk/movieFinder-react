import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/user/constants';
import HTTPService from '@/services/httpService';

export const getMovieList = async (): Promise<AxiosPromise> => {
  const response = await HTTPService.get(`${SERVER_PATHS.movies}?page=1`);
  return response;
};
