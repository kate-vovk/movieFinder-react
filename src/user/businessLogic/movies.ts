import { getMovieList } from '@/user/api/movies';
import { convertToCamelCase } from '@/utils/conversionToCamelCase';

export const getMovies = async (): Promise<any> => {
  const { data } = await getMovieList();
  return convertToCamelCase(data);
};
