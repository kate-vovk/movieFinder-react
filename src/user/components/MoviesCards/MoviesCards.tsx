import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { IMovie } from '@/interfaces/movieInterface';
import { MovieCard, Pagination } from '@/user/components';
import { movieListSelector, movieStatusSelector } from '@/user/store/selectors/movies';
import { DataStatus } from '@/interfaces/status';
import { Circular } from '@/sharedComponents/Circular';
import { MoviesIsEmpty } from './MoviesIsEmpty';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  const movieList = useSelector(movieListSelector);
  const movieStatus = useSelector(movieStatusSelector);

  if (movieStatus === DataStatus.loading) {
    return <Circular />;
  }

  if (movieStatus === DataStatus.empty) {
    return <MoviesIsEmpty />;
  }

  return (
    <>
      <ul className={classes.listItem}>
        {movieList.map((movie: IMovie) => (
          <li key={movie.id} className={classes.item}>
            <MovieCard movie={movie} key={movie.id} />
          </li>
        ))}
      </ul>
      <Pagination />
    </>
  );
};
