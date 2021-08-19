import { FunctionComponent } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  return <MovieCard />;
};
