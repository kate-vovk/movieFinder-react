import { IGetMovies } from '@/interfaces/movieInterface';
import { getMovieList } from '@/user/api/movies';

export const getMovies = async (): Promise<IGetMovies> => {
  const { data } = await getMovieList();
  return data;
};
