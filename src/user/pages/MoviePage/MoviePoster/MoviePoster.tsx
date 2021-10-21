import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { MovieControl } from '@/user/components';
import { urlEmptyPoster } from '@/user/constants/constantsMovie';
import { useStyle } from './styles';

interface IMoviePosterProps {
  cover?: string;
  price: number;
  title: string;
  movieId: string;
}

export const MoviePoster: FunctionComponent<IMoviePosterProps> = ({
  cover,
  price,
  title,
  movieId,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.columnLeft}>
      <div className={classes.poster}>
        <img className={classes.posterImage} src={cover || urlEmptyPoster} alt={title} />
        <div className={classes.posterRate}>
          <StarIcon className={classes.posterRateIcon} />
          <span className={classes.posterRateText}>9</span>
          <span>/10</span>
        </div>
      </div>
      <MovieControl movieId={movieId} price={price} />
    </div>
  );
};
