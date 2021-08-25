import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { getMovieList } from '@/store/slices/moviesSlice';
import { IMovieCard } from '@/utils/ interfaces/movieInterfaces';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);
  const classes = useStyle();

  const moviesList = async (): Promise<void> => {
    const response: any = await dispatch(getMovieList());
    const data = response.payload;
    setMovieList(data);
  };

  useEffect(() => {
    moviesList();
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
