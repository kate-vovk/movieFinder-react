import { IGetMovies } from '@/interfaces/movieInterface';
import { getMovieList } from '@/user/api/movies';

export const getMovies = async (): Promise<IGetMovies> => {
  const {
    data: { films, totalFilmCounter },
  } = await getMovieList();
  return { films, totalFilmCounter };
};
