import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieFooter } from '@/components';
import { CLIENT_PATHS } from '@/constants';
import { useStyle } from './styles';

interface IMovieCardProps {
  movie: IMovie;
}

export const MovieCard: FunctionComponent<IMovieCardProps> = ({ movie }) => {
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <Link to={`${CLIENT_PATHS.movies}/${movie.id}`} className={classes.link}>
        <Typography className={classes.title} variant="h5">
          {movie.title}
        </Typography>
        <CardMedia className={classes.image} image={movie.coverUrl} />
        <CardContent className={classes.description}>
          <Typography>{movie.description}</Typography>
        </CardContent>
      </Link>
      <MovieFooter movieId={movie.id} price={movie.price} />
    </Card>
  );
};
