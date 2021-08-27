import { CLIENT_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getMovieList = async (): Promise<any> => {
  const response = await HTTPService.get(CLIENT_PATHS.movies);
  return response;
};
