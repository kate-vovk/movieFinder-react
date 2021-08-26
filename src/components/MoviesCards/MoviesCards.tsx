import { FunctionComponent, useEffect, useState } from 'react';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { getMovies } from '@/businessLogic/movies';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const classes = useStyle();

  useEffect(() => {
    getMovies().then((response: IMovie[]) => setMovieList(response));
  }, []);

  return (
    <ul className={classes.listItem}>
      {movieList.map((movie: IMovie) => (
        <li key={movie.id} className={classes.item}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
