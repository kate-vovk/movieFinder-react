import { getMovieList } from '@/admin/api/movies';
import { IGetMovies } from '@/admin/interfaces/admin';
import { DataStatus, IMovieList } from '@/admin/interfaces';
import CustomError from '@/utils/customError';
import { ICaughtError } from '@/interfaces/errorInterfaces';
import { deleteMovie } from '../api/movie';

export const getMovies = async ({ page, limit }: IMovieList): Promise<IGetMovies> => {
  try {
    const { data } = await getMovieList({ page, limit });
    if (data?.results?.length && data.total !== 0) {
      data.status = DataStatus.success;
      return data;
    }
    data.status = DataStatus.error;
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};

export const deleteMovieFromServer = async (movieId: string): Promise<string> => {
  try {
    const { data } = await deleteMovie(movieId);
    return data;
  } catch (err) {
    throw new CustomError(err as ICaughtError);
  }
};
