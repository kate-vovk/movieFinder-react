import { getMovieList } from '@/admin/api/movies';
import { IGetMovies } from '@/interfaces/movieInterface';
import { IMovieList } from '@/admin/interfaces';
import CustomError from '@/utils/customError';

export const getMovies = async ({ page, limit }: IMovieList): Promise<IGetMovies> => {
  try {
    const { data } = await getMovieList({ page, limit });
    if (data?.results?.length && data.total !== 0) {
      return data;
    }
    throw new Error('something went wrong, please try again');
  } catch (err) {
    throw new CustomError(err as { response: { status: number }; message: string });
  }
};
