import { AxiosResponse } from 'axios';
import { SERVER_PATHS } from '@/admin/constants';
import HTTPService from '@/services/httpService';

export interface IMovieList {
  page?: number;
  limit: number;
}

export const getMovieList = ({ page = 1, limit = 15 }: IMovieList): Promise<AxiosResponse> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?page=${page}&limit=${limit}`);
};
