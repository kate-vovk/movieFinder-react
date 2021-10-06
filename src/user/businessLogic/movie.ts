import { getMovie } from '@/user/api/movie';
import { IMovie } from '@/interfaces/movieInterface';

interface IGetMovie {
  movie: IMovie;
  voteAverage: number;
}

export const getDataMoviePage = async (movieId: string): Promise<IGetMovie> => {
  const {
    data: { film: movie, avg },
  } = await getMovie(movieId);
  return { movie, voteAverage: Number(avg[0].round) };
};
