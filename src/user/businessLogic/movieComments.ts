import { AxiosPromise } from 'axios';
import {
  addMovieCommentAPI,
  changeMovieCommentAPI,
  deleteCommentAPI,
  getMovieAllCommentsAPI,
} from '../api/movieComments';

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

export const changeMovieComment = async ({
  commentId,
  userId,
  comment,
}: {
  commentId: string;
  userId: string;
  comment: string;
}): Promise<AxiosPromise> => {
  return changeMovieCommentAPI({
    commentId,
    userId,
    comment,
  });
};

export const deleteComment = ({
  commentId,
  userId,
}: {
  commentId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  return deleteCommentAPI({
    commentId,
    userId,
  });
};
