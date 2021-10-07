/* eslint-disable camelcase */
import { AxiosPromise } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

export const getMovieAllCommentsAPI = async ({
  movieId,
  page,
  limit,
}: {
  movieId: string;
  page: number;
  limit: number;
}): Promise<AxiosPromise> => {
  return HTTPService.get(
    `${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.comments}?limit=${limit}&page=${page - 1}`,
  );
};

export const addMovieCommentAPI = async ({
  movieId,
  userId: user_id,
  comment,
}: {
  movieId: string;
  userId: string;
  comment: string;
}): Promise<AxiosPromise> => {
  return HTTPService.post(`${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.comments}`, {
    user_id,
    comment,
    date: new Date().toISOString(),
  });
};
