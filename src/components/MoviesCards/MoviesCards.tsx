import { FunctionComponent, useEffect, useState } from 'react';
import HTTPService from '@/services/httpService';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { PATH } from '@/constants/contants';

export const MoviesCards: FunctionComponent = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    HTTPService.get(PATH.movies).then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return <MovieCard movies={movies} />;
};
