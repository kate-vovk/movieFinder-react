import HTTPService from '@/services/httpService';
import { FunctionComponent, useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesCards: FunctionComponent = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    HTTPService.get('/movies').then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return <MovieCard movies={movies} />;
};
