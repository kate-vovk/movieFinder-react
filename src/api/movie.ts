import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getMovie = (movieId: string): Promise<any> => {
  return HTTPService.get(`${SERVER_PATHS.movies}?id=${movieId}`);
};

export const getListActors = (): Promise<any> => {
  return HTTPService.get(SERVER_PATHS.actors);
};

export const getListGenres = (): Promise<any> => {
  return HTTPService.get(SERVER_PATHS.genres);
};

export const getListCategories = (): Promise<any> => {
  return HTTPService.get(SERVER_PATHS.categories);
};
