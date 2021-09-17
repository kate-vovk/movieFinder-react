import { getMovie } from '@/api/movie';
import { convertToCamelCase } from '@/utils/conversionToCamelCase';
import { IMovie } from '@/utils/interfaces/cartInterfaces';

export const getDataMoviePage = async (movieId: string): Promise<IMovie> => {
  const { data: movieCardData } = await getMovie(movieId);
  return convertToCamelCase(movieCardData)[0];
};
