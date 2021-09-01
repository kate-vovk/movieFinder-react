import { FunctionComponent, useEffect, useState } from 'react';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import { getMovieByQuery } from '@/businessLogic/search';
import { getMovies } from '@/businessLogic/movies';
import { useStyle } from './styles';

interface IProps {
  searchQuery: string;
  selectParam: string;
  isRequest: boolean;
}

export const MoviesCards: FunctionComponent<IProps> = ({ selectParam, searchQuery, isRequest }) => {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const classes = useStyle();

  useEffect(() => {
    if (!selectParam && !searchQuery) {
      getMovies().then((data: IMovie[]) => {
        setMovieList(data);
      });
    }
    getMovieByQuery(selectParam, searchQuery).then((data: IMovie[]) => {
      setMovieList(data);
    });
  }, [isRequest]);

  return (
    <>
      {movieList?.length ? (
        <ul className={classes.listItem}>
          {movieList.map((movie: IMovie) => (
            <li key={movie.id} className={classes.item}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No data was found!</p>
      )}
    </>
  );
};
