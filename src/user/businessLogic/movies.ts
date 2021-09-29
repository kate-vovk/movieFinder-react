import { IMovie } from '@/interfaces/cartInterfaces';
import { getMovieList } from '@/user/api/movies';

export const getMovies = async (): Promise<IMovie[]> => {
  const { data } = await getMovieList();
  return data;
};
