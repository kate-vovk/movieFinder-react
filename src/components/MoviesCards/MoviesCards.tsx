import HTTPService from '@/services/httpService';
import { FunctionComponent, useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

interface IMovies {
  id: number;
  title: string;
  description: string;
  cover: string;
}

export const MoviesCards: FunctionComponent = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  useEffect(() => {
    HTTPService.get('/movies').then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return <MovieCard movies={movies} />;
};
