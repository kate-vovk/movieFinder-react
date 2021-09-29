import { getDataFromApi } from '@/user/api/search-filter';
import { IMovie } from '@/interfaces/cartInterfaces';

export const getMovieByQuery = async (path: string): Promise<IMovie[]> => {
  const { data } = await getDataFromApi(path);
  return data;
};
