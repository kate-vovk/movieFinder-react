import { getDataFromApi } from '@/api/search';

export const getMovieByQuery = async (path: string): Promise<any> => {
  const { data } = await getDataFromApi(path);
  return data;
};
