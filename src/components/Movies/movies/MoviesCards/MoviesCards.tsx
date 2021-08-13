import { FunctionComponent } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {[1, 2, 3, 4, 5].map(() => (
        <MovieCard />
      ))}
      <i area-hidden="true" style={{ width: '300px' }} />
      <i area-hidden="true" style={{ width: '300px' }} />
      <i area-hidden="true" style={{ width: '300px' }} />
      <i area-hidden="true" style={{ width: '300px' }} />
      <i area-hidden="true" style={{ width: '300px' }} />
    </div>
  );
};
