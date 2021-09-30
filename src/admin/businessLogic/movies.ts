import { getMovieList, IMovieList } from '@/admin/api/movies';
import { IMovie } from '@/interfaces/movieInterface';

export const getMovies = async ({ page, limit }: IMovieList): Promise<IMovie[]> => {
  const { data } = await getMovieList({ page, limit });
  return data.films;
};
