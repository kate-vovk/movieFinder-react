import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/admin/constants';
import HTTPService from '@/services/httpService';
import { IMovieList } from '@/admin/interfaces';

export const getMovieList = ({ page = 0, limit = 15 }: IMovieList): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?page=${page}&limit=${limit}`);
};
