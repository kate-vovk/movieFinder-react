import { FunctionComponent, useEffect, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Rating } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { MovieControl } from '@/user/components';
import { urlEmptyPoster } from '@/user/constants/constantsMovie';
import { useStyle } from './styles';
import { THandleChangeValueSlider } from '@/interfaces/movieTypes';
import { addRate, getMovieRate } from '@/user/businessLogic/movieRate';
import { userIdSelector } from '@/user/store/selectors/auth';

interface IMoviePosterProps {
  cover: string;
  price: number;
  title: string;
  movieId: string;
  voteAverage: number;
}

export const MoviePoster: FunctionComponent<IMoviePosterProps> = ({
  cover,
  price,
  title,
  movieId,
  voteAverage,
}) => {
  const classes = useStyle();
  const userId = useSelector(userIdSelector);

  const [userRate, setUserRate] = useState(0);

  useEffect(() => {
    getMovieRate({
      movieId,
      userId,
    }).then((rate) => {
      setUserRate(rate);
    });
  }, []);

  const getValueSlider: THandleChangeValueSlider = (_event, newRate): void => {
    setUserRate(newRate as number);
    addRate({ movieId, userId, rate: newRate as number });
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
        <Rating value={userRate} name="customized-10" max={10} onChange={getValueSlider} />
      </div>
    </div>
  );
};
