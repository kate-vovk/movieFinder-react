import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Rating } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { MovieControl } from '@/user/components';
import { urlEmptyPoster } from '@/user/constants/constantsMovie';
import { useStyle } from './styles';
import { THandleChangeValueSlider } from '@/interfaces/movieTypes';
import { addRate } from '@/user/businessLogic/movieRate';
import { userIdSelector } from '@/user/store/selectors/auth';
import { DataStatus } from '@/interfaces/status';

interface IMoviePosterProps {
  cover?: string;
  price: number;
  title: string;
  movieId: string;
  voteAverage: number;
  userRate: number;
  setUserRate: (data: number) => void;
  setEditedUserRate: (flag: boolean) => void;
  setMoviePageStatus: (state: DataStatus) => void;
}

export const MoviePoster: FunctionComponent<IMoviePosterProps> = ({
  cover,
  price,
  title,
  movieId,
  voteAverage,
  userRate,
  setUserRate,
  setEditedUserRate,
  setMoviePageStatus,
}) => {
  const classes = useStyle();
  const userId = useSelector(userIdSelector);

  const changeRate: THandleChangeValueSlider = (_event, newRate): void => {
    setMoviePageStatus(DataStatus.loading);
    addRate({ movieId, userId, rate: newRate as number })
      .then(() => {
        setUserRate(newRate as number);
        setEditedUserRate(true);
      })
      .catch(() => {
        setMoviePageStatus(DataStatus.error);
      });
  };

  return (
    <div className={classes.columnLeft}>
      <div className={classes.poster}>
        <img className={classes.posterImage} src={cover || urlEmptyPoster} alt={title} />
        <div className={classes.posterRate}>
          <StarIcon className={classes.posterRateIcon} />
          <span className={classes.posterRateText}>{Math.round(voteAverage)}</span>
          <span>/10</span>
        </div>
      </div>
      <MovieControl movieId={movieId} price={price} />
      <div className={classes.rateContainer}>
        <h3>Your rate:</h3>
        <Rating value={userRate} name="customized-10" max={10} onChange={changeRate} />
      </div>
    </div>
  );
};
