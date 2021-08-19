import { FunctionComponent } from 'react';
// import { Box } from '@material-ui/core';
import { MovieCard } from '../MovieCard/MovieCard';
import { useStyle } from './styles';

export const MoviesCards: FunctionComponent = () => {
  const classes = useStyle();
  return (
    // <Box className={classes.container}>
    //   {[1, 2, 3, 4].map(() => (
    <MovieCard />
    //   ))}
    // </Box>
  );
};
