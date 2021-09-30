import { getDataFromApi } from '@/user/api/search-filter';
import { IGetMovies } from '@/interfaces/movieInterface';

export const getMovieByQuery = async (path: string): Promise<IGetMovies> => {
  const {
    data: { films, totalFilmCounter },
  } = await getDataFromApi(path);

  return { films, totalFilmCounter };
};
