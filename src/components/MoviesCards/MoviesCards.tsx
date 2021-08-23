import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { addToPage } from '@/store/slices/movieSlice';
import { IMovieCard } from '@/constants/interfaces';
import { movieListSelector } from '@/selectors/movie';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const listMovies = useSelector(movieListSelector);

  useEffect(() => {
    dispatch(addToPage());
  }, []);

  // for the future pagination
  // const [moviesForRender, setMoviesForRender] = useState<IMovieCard[]>([]);
  // const loadMovie = (): void => {
  //   dispatch(addToPage());
  // };

  // useEffect(() => {
  //   setMoviesForRender(listMovies);
  // }, [listMovies]);

  return (
    <ul className={classes.listItem}>
      {listMovies.map((movie: IMovieCard) => (
        <li key={movie.id} className={classes.item}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
