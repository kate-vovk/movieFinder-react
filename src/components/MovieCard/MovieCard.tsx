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

interface Movies {
  movies: IMovieCard[];
}

export const MovieCard: FunctionComponent<Movies> = ({ movies }) => {
  const classes = useStyle();

  return (
    <ul className={classes.listItem}>
      {movies.map((movie: IMovieCard) => (
        <li key={movie.id} className={classes.item}>
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
        </li>
      ))}
    </ul>
  );
};
