import { getMovieList, IMovieList } from '@/admin/api/movies';
import { IGetMovies } from '@/interfaces/movieInterface';

export const getMovies = async ({ page, limit }: IMovieList): Promise<IGetMovies> => {
  const { data } = await getMovieList({ page, limit });
  return data;
};
