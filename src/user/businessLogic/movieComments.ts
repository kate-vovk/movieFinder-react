import { AxiosPromise } from 'axios';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';
import {
  addMovieCommentAPI,
  changeMovieCommentAPI,
  deleteCommentAPI,
  getMovieAllCommentsAPI,
} from '../api/movieComments';
import { CLIENT_PATHS } from '../constants';
import CustomError from '@/utils/customError';
import { IComment } from '@/interfaces/commentInterfaces';

export const getMovieAllComments = async ({
  movieId,
  page,
  limit,
}: {
  movieId: string;
  page: number;
  limit: number;
}): Promise<{ results: IComment[]; total: number }> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getMovieAllComments/failed'));
    store.dispatch(actionToDispatch('errors/clearError', 'changeMovieComment/failed'));
    store.dispatch(actionToDispatch('errors/clearError', 'deleteComment/failed'));
    store.dispatch(actionToDispatch('errors/clearError', 'addMovieComment/failed'));
    const { data } = await getMovieAllCommentsAPI({ movieId, page, limit });
    return data;
  } catch (err) {
    const error = {
      errorName: 'getMovieAllComments/failed',
      failedFunctionFromBusinessLogic: getMovieAllComments,
      params: {
        movieId,
        page,
        limit,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.comments}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
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
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'addMovieComment/failed'));
    return await addMovieCommentAPI({
      userId,
      comment,
      movieId,
    });
  } catch (err) {
    const error = {
      errorName: 'addMovieComment/failed',
      failedFunctionFromBusinessLogic: addMovieComment,
      params: {
        movieId,
        userId,
        comment,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.comments}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
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
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'changeMovieComment/failed'));
    return await changeMovieCommentAPI({
      commentId,
      userId,
      comment,
    });
  } catch (err) {
    const error = {
      errorName: 'changeMovieComment/failed',
      failedFunctionFromBusinessLogic: changeMovieComment,
      params: {
        commentId,
        userId,
        comment,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.comments}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};

export const deleteComment = async ({
  commentId,
  userId,
}: {
  commentId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'deleteComment/failed'));
    return await deleteCommentAPI({
      commentId,
      userId,
    });
  } catch (err) {
    const error = {
      errorName: 'deleteComment/failed',
      failedFunctionFromBusinessLogic: deleteComment,
      params: {
        commentId,
        userId,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.comments}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};
