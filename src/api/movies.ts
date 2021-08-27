import { PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getMovieList = async (): Promise<any> => {
  const response = await HTTPService.get(PATHS.movies);
  return response;
};
