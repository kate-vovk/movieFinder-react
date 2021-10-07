import { AxiosPromise } from 'axios';
import { addMovieCommentAPI, getMovieAllCommentsAPI } from '../api/movieComments';

export const getMovieAllComments = async ({
  movieId,
  page,
  limit,
}: {
  movieId: string;
  page: number;
  limit: number;
}): Promise<any> => {
  const { data } = await getMovieAllCommentsAPI({ movieId, page, limit });
  return data;
};

export const addMovieComment = async ({
  movieId,
  userId,
  comment,
}: {
  movieId: string;
  userId: string;
  comment: string;
}): Promise<AxiosPromise> => {
  return addMovieCommentAPI({
    userId,
    comment,
    movieId,
  });
};
