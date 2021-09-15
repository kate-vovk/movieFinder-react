import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieCard } from '@/components';
import { movieListSelector } from '@/selectors/search';
import { useStyle } from './styles';

interface IMoviesCardsProps {
  searchQuery: string;
  selectParam: string;
}

export const MoviesCards: FunctionComponent<IMoviesCardsProps> = () => {
  const classes = useStyle();
  const movieList = useSelector(movieListSelector);

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
