import { getMovieByParams } from '@/api/search';

export const getMovieByQuery = async (selectParam: string, searchQuery: string): Promise<any> => {
  const { data } = await getMovieByParams(selectParam, searchQuery);
  return data;
};
