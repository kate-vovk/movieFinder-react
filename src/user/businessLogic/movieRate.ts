import { AxiosPromise } from 'axios';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';
import { getMovieRateAPI, addRateAPI, deleteRateAPI, updateRateAPI } from '../api/movieRate';
import CustomError from '@/utils/customError';
import { CLIENT_PATHS } from '../constants';

export const addRate = async ({
  movieId,
  userId,
  rate,
}: {
  movieId: string;
  userId: string;
  rate: number;
}): Promise<AxiosPromise> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'addRate/failed'));
    const { data } = await getMovieRateAPI({ movieId, userId });
    return data.length === 0
      ? addRateAPI({
          movieId,
          userId,
          rate,
        })
      : updateRateAPI({
          movieId,
          userId,
          rate,
        });
  } catch (err) {
    const error = {
      errorName: 'addRate/failed',
      failedFunctionFromBusinessLogic: addRate,
      params: {
        movieId,
        userId,
        rate,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.movies}/${movieId}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};

export const deleteRate = ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'deleteRate/failed'));
    return deleteRateAPI({ movieId, userId });
  } catch (err) {
    const error = {
      errorName: 'deleteRate/failed',
      failedFunctionFromBusinessLogic: deleteRate,
      params: {
        movieId,
        userId,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.movies}/${movieId}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};

export const getMovieRate = async ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}): Promise<number> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getMovieRate/failed'));
    const { data } = await getMovieRateAPI({ movieId, userId });
    if (data.length === 0) {
      return 0;
    }
    return data[data.length - 1].rate;
  } catch (err) {
    const error = {
      errorName: 'getMovieRate/failed',
      failedFunctionFromBusinessLogic: getMovieRate,
      params: {
        movieId,
        userId,
      },
      isMajor: false,
      isMajorFlagMutable: false,
      route: `${CLIENT_PATHS.movies}/${movieId}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};
