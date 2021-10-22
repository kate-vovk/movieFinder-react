/* eslint-disable camelcase */
import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/user/constants';
import HTTPService from '@/services/httpService';

export const addRateAPI = async ({
  movieId,
  userId: user_id,
  rate,
}: {
  movieId: string;
  userId: string;
  rate: number;
}): Promise<AxiosPromise> => {
  return HTTPService.post(`${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.rate}`, {
    user_id,
    rate,
  });
};

export const updateRateAPI = async ({
  movieId,
  userId: user_id,
  rate,
}: {
  movieId: string;
  userId: string;
  rate: number;
}): Promise<AxiosPromise> => {
  return HTTPService.patch(`${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.rate}`, {
    user_id,
    rate,
  });
};

export const getMovieRateAPI = ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.rate}?user_id=${userId}`);
};

export const deleteRateAPI = ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  return HTTPService.delete(
    `${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.rate}?user_id=${userId}`,
  );
};
