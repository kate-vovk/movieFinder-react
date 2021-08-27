import { getMovieList } from '@/api/movies';

export const getMovies = async (): Promise<any> => {
  const { data } = await getMovieList();
  return data;
};
