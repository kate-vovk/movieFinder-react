import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { MoviePosterFooter } from '@/components/MoviePage/MoviePosterFooter/MoviePosterFooter';
import { useStyle } from './styles';

interface IProps {
  cover: string;
  price: number;
  title: string;
}

const urlEmptyPoster =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg';

export const MoviePoster: FunctionComponent<IProps> = ({ cover, price, title }) => {
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
      <MoviePosterFooter price={price} />
    </div>
  );
};
