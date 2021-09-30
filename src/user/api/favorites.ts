/* eslint-disable camelcase */
import { AxiosPromise } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';
import { IFavoritesMovieState } from '@/interfaces/favoritesInterface';

export const getFavorites = async (userId: string): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.favorites}?user_id=${userId}`);
};

export const addMovieToFavorites = async ({
  userId: user_id,
  movieId: film_id,
}: IFavoritesMovieState): Promise<AxiosPromise> => {
  return HTTPService.post(SERVER_PATHS.favorites, {
    user_id,
    film_id,
  });
};

export const deleteMovieFromFavorites = async ({
  userId: user_id,
  movieId: film_id,
}: IFavoritesMovieState): Promise<AxiosPromise> => {
  return HTTPService.delete(`${SERVER_PATHS.favorites}?user_id=${user_id}&film_id=${film_id}`);
};
