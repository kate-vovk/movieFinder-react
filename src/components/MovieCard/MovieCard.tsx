import { FunctionComponent, useEffect, useState } from 'react';
import HTTPService from '@/services/httpService';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyle } from './styles';
import { MovieFooter } from '../MovieFooter/MovieFooter';

export const MovieCard: FunctionComponent = () => {
  interface IMovies {
    id: number;
    title: string;
    description: string;
    cover: string;
  }
  const [movies, getMovies] = useState<IMovies[]>([]);
  useEffect(() => {
    HTTPService.get('/movies').then(({ data }) => {
      getMovies(data);
    });
  }, []);
  const classes = useStyle();
  return (
    <ul className={classes.listItem}>
      {movies.map((movie: IMovies) => (
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
