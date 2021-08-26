import { PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getMovieList = async (): Promise<any> => {
  const data = await HTTPService.get(PATHS.movies);
  return data;
};
