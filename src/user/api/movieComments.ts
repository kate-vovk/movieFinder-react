/* eslint-disable camelcase */
import { AxiosPromise } from 'axios';
import HTTPService from '@/services/httpService';
import { SERVER_PATHS } from '@/user/constants';

export const getMovieAllCommentsAPI = ({ movieId }: { movieId: string }): Promise<AxiosPromise> => {
  return HTTPService.get(`${SERVER_PATHS.movies}/${movieId}${SERVER_PATHS.comments}`);
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
