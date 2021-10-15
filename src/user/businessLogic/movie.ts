import { getMovie } from '@/user/api/movie';
import { IMovie } from '@/interfaces/movieInterface';
import CustomError from '@/utils/customError';
import { store } from '@/store';
import { actionToDispatch } from '@/utils';

interface IGetMovie {
  movie: IMovie;
  voteAverage: number;
}

export const getDataMoviePage = async (movieId: string): Promise<IGetMovie> => {
  try {
    store.dispatch(actionToDispatch('errors/clearError', 'getDataMoviePage/failed'));
    const {
      data: { film: movie, avg },
    } = await getMovie(movieId);
    return { movie, voteAverage: Number(avg[0].round) };
  } catch (err) {
    const error = {
      errorName: 'getDataMoviePage/failed',
      failedFunctionFromBusinessLogic: getDataMoviePage,
      params: movieId,
      isMajorFlagMutable: true,
      route: `/movies/${movieId}`,
    };
    throw new CustomError(err as { response: { status: number }; message: string }, error);
  }
};
