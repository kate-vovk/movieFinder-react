import { FunctionComponent } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyle } from './styles';
import { MovieFooter } from '../MovieFooter/MovieFooter';

export const MovieCard: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardActionArea>
        <Typography className={classes.title} variant="h5">
          Movie name
        </Typography>
        <CardMedia className={classes.image} />
        <CardContent className={classes.description}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <MovieFooter />
    </Card>
  );
};
