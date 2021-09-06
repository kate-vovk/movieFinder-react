import { FunctionComponent, useEffect } from 'react';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { getMovieByQuery } from '@/businessLogic/search';
import { getMovieList, getMovieListWithQuery } from '@/store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieListSelector } from '@/selectors/search';
import { useStyle } from './styles';

interface IMoviesCardsProps {
  searchQuery: string;
  selectParam: string;
}

export const MoviesCards: FunctionComponent<IMoviesCardsProps> = ({
  selectParam,
  searchQuery,
  isRequest,
}) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const movieList = useSelector(movieListSelector);

  useEffect(() => {
    if (!selectParam && !searchQuery) {
      dispatch(getMovieList());
    }
    dispatch(getMovieListWithQuery({ selectParam, searchQuery }));
  }, [isRequest]);

  return (
    <>
      {movieList?.length ? (
        <ul className={classes.listItem}>
          {movieList.map((movie: IMovie) => (
            <li key={movie.id} className={classes.item}>
              <MovieCard movie={movie} key={movie.id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No data was found!</p>
      )}
    </>
  );
};
