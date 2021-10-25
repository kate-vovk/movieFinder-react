import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/admin/constants';
import HTTPService from '@/services/httpService';
import { IMovie } from '@/interfaces/movieInterface';

export const getMovie = (movieId: string): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?id=${movieId}`);
};

export const editMovie = (values: IMovie): Promise<AxiosPromise> => {
  return HTTPService.patch(`${SERVER_PATHS.movies}`, values);
};

export const addMovie = (values: IMovie): Promise<AxiosPromise> => {
  return HTTPService.post(`${SERVER_PATHS.movies}`, values);
};
