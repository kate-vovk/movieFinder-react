import { getMovieList, IMovieList } from '@/admin/api/movies';
import { IMovie } from '@/interfaces/movieInterface';

export const getMovies = async ({ page, limit }: IMovieList): Promise<IGetMovies[]> => {
  const {
    data: { results, total }
  } = await getMovieList({ page, limit });
  return { results, total };
};
