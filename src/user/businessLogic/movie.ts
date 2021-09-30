import { getMovie } from '@/user/api/movie';
import { IMovie } from '@/interfaces/movieInterface';

export const getDataMoviePage = async (movieId: string): Promise<IMovie> => {
  const { data: movieCardData } = await getMovie(movieId);
  return movieCardData;
};
