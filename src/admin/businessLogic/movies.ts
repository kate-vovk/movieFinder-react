import { getMovieList } from '@/admin/api/movies';
import { IGetMovies } from '@/interfaces/movieInterface';
import { IMovieList } from '@/admin/interfaces';

export const getMovies = async ({ page, limit }: IMovieList): Promise<IGetMovies> => {
  const { data } = await getMovieList({ page, limit });
  return data;
};
