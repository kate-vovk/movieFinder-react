import { FunctionComponent } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyle } from './styles';
import { MovieFooter } from '../MovieFooter/MovieFooter';

interface IMovieCard {
  id: number;
  title: string;
  cover: string;
  description: string;
}

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
