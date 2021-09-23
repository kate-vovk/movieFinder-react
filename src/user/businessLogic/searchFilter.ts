import { getDataFromApi } from '@/user/api/search-filter';
import { convertToCamelCase } from '@/utils/conversionToCamelCase';

export const getMovieByQuery = async (path: string): Promise<any> => {
  const { data } = await getDataFromApi(path);
  return convertToCamelCase(data);
};
