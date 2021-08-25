import { FunctionComponent } from 'react';
import { IMovieCard } from '@/utils/interfaces/movieInterfaces';
import { MovieFooter } from '@/components/MovieFooter/MovieFooter';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyle } from './styles';

interface IProps {
  movie: IMovieCard;
}

export const MovieCard: FunctionComponent<IProps> = ({ movie }) => {
  const classes = useStyle();

  return (
    <Card className={classes.container}>
      <CardActionArea>
        <Typography className={classes.title} variant="h5">
          {movie.title}
        </Typography>
        <CardMedia className={classes.image} image={movie.cover} />
        <CardContent className={classes.description}>
          <Typography>{movie.description}</Typography>
        </CardContent>
      </CardActionArea>
      <MovieFooter />
    </Card>
  );
};
