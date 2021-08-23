import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { movieListRender } from '@/store/slices/moviesSlice';
import { IMovieCard } from '@/constants/interfaces';
import { movieListSelector } from '@/selectors/movie';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const movieList = useSelector(movieListSelector);

  useEffect(() => {
    dispatch(movieListRender());
  }, []);

  return (
    <ul className={classes.listItem}>
      {movieList.map((movie: IMovieCard) => (
        <li key={movie.id} className={classes.item}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
