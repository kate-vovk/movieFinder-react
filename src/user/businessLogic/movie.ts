import { getMovie } from '@/user/api/movie';
import { convertObjToCamelCase } from '@/utils/conversionToCamelCase';
import { IMovie } from '@/interfaces/movieInterface';

export const getDataMoviePage = async (movieId: string): Promise<IMovie> => {
  const { data: movieCardData } = await getMovie(movieId);
  return convertObjToCamelCase(movieCardData);
};
