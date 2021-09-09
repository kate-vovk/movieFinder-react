import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieFooter } from '@/components/MovieFooter/MovieFooter';
import { CLIENT_PATHS } from '@/constants/constants';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyle } from './styles';

interface IProps {
  movie: IMovie;
}

export const MovieCard: FunctionComponent<IProps> = ({ movie }) => {
  const classes = useStyle();

  return (
    <Card className={classes.container}>
      <Link to={`${CLIENT_PATHS.movie}/${movie.id}`}>
        <Typography className={classes.title} variant="h5">
          {movie.title}
        </Typography>
        <CardMedia className={classes.image} image={movie.cover_url} />
        <CardContent className={classes.description}>
          <Typography>{movie.description}</Typography>
        </CardContent>
      </Link>
      <MovieFooter movieId={movie.id} price={movie.price} />
    </Card>
  );
};
