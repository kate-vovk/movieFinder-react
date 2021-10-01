import { getDataFromApi } from '@/user/api/search-filter';
import { IGetMovies } from '@/interfaces/movieInterface';

export const getMovieByQuery = async (path: string): Promise<IGetMovies> => {
  const {
    data: { results, total },
  } = await getDataFromApi(path);

  return { results, total };
};
