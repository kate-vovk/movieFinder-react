import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMovieCard } from '@/utils/interfaces/movieInterfaces';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { getMovieList } from '@/store/slices/moviesSlice';
import { movieListSelector, moviesStateSelector } from '@/selectors/movie';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(movieListSelector);
  const movies = useSelector(moviesStateSelector);

  // const [movieList, setMovieList] = useState([]);
  const classes = useStyle();

  // const moviesList = async (): Promise<void> => {
  //   const response: any = await dispatch(getMovieList());
  //   const data = response.payload;
  //   setMovieList(data);
  // };

  // useEffect(() => {
  //   moviesList();
  // }, []);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <>
      {movies.loading && <p>LOADING...</p>}
      {movies.error && <p>ERROR...</p>}
      {!movies.loading && !movies.error && (
        <ul className={classes.listItem}>
          {movieList.map((movie: IMovieCard) => (
            <li key={movie.id} className={classes.item}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
