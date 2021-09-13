import { getMovieByParams } from '@/api/search';
import { convertToCamelCase } from '@/utils/conversionToCamelCase/conversionToCamelCase';

export const getMovieByQuery = async (selectParam?: string, searchQuery?: string): Promise<any> => {
  const { data } = await getMovieByParams(selectParam, searchQuery);
  return convertToCamelCase(data);
};
