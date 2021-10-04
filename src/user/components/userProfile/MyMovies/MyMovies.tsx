import { Button } from '@material-ui/core';
import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IOrder } from '@/interfaces/orderInterface';
import { userIdSelector } from '@/user/store/selectors/auth';
import { activeOrdersSelector } from '@/user/store/selectors/orders';
import { setUserOrdersToStore } from '@/user/store/slices/ordersSlice';
import { useStyle } from './styles';
import { MyMovieItem } from './MyMovieItem';
import { MyMoviesIsEmpty } from './MyMoviesIsEmpty';

export const MyMovies: FunctionComponent = () => {
  const { t } = useTranslation(['UserPage']);

  const classes = useStyle();
  const history = useHistory();

  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const myMovies = useSelector(activeOrdersSelector);

  useEffect(() => {
    dispatch(setUserOrdersToStore({ userId }));
  }, []);

  const goToMainPage = (): void => {
    history.push('/');
  };

  return (
    <div>
      <h1 className={classes.title}>{t('MyMovies')}</h1>
      {!myMovies.length ? (
        <MyMoviesIsEmpty />
      ) : (
        <div className={classes.myMoviesContainer}>
          <ul className={classes.listItem}>
            {myMovies.map((movie: IOrder) => (
              <li className={classes.item} key={movie.id}>
                <MyMovieItem
                  movieId={movie.id}
                  coverUrl={movie.coverUrl}
                  title={movie.title}
                  quality={movie.qualityId}
                  duration={movie.duration}
                  expirationDate={movie.expireDate}
                  period={movie.period}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button color="primary" variant="contained" type="button" onClick={goToMainPage}>
        {t('goHome')}
      </Button>
    </div>
  );
};
