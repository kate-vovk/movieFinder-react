import { FunctionComponent, useEffect, useState } from 'react';
import HTTPService from '@/services/httpService';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { PATH } from '@/constants/contants';
import { useStyle } from './styles';

interface IMovieCard {
  id: number;
  title: string;
  cover: string;
  description: string;
}

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    HTTPService.get(PATH.movies).then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return (
    <ul className={classes.listItem}>
      {movies.map((movie: IMovieCard) => (
        <li key={movie.id} className={classes.item}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
