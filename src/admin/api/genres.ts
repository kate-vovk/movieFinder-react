import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/admin/constants';
import HTTPService from '@/services/httpService';

export const getGenres = (): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.movies}/genres`);
};
