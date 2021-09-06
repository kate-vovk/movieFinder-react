import { FunctionComponent, useEffect } from 'react';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { getMovieListWithQuery } from '@/store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieListSelector } from '@/selectors/search';
import { useDebounce } from 'use-debounce';
import { useStyle } from './styles';

interface IMoviesCardsProps {
  searchQuery: string;
  selectParam: string;
}

export const MoviesCards: FunctionComponent<IMoviesCardsProps> = ({ selectParam, searchQuery }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const movieList = useSelector(movieListSelector);

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  useEffect(() => {
    dispatch(getMovieListWithQuery({ selectParam, searchQuery }));
  }, [selectParam, debouncedSearchQuery]);

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
