import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { MovieControl } from '@/components';
import { useStyle } from './styles';

interface IProps {
  cover: string;
  price: number;
  title: string;
  movieId: string;
}

const urlEmptyPoster =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg';

export const MoviePoster: FunctionComponent<IProps> = ({ cover, price, title, movieId }) => {
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
