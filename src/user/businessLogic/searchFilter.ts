import { getDataFromApi } from '@/user/api/search-filter';
import { IGetMovies } from '@/interfaces/movieInterface';
import { actionToDispatch } from '@/utils';
import { store } from '@/store';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';

export const getMovieByQuery = async (path: string): Promise<IGetMovies> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getMovieByQuery/failed'));
    const {
      data: { results, total },
    } = await getDataFromApi(path);
    return { results, total };
  } catch (err) {
    const error = {
      errorName: 'getMovieByQuery/failed',
      failedFunctionFromBusinessLogic: getMovieByQuery,
      params: path,
      isMajorFlagMutable: true,
      route: '/movies',
    };
    throw new CustomError(err as ICaughtError, error);
  }
};
