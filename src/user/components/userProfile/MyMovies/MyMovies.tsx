import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IOrder } from '@/interfaces/orderInterface';
import { userIdSelector } from '@/user/store/selectors/auth';
import { activeOrdersSelector } from '@/user/store/selectors/myMovies';
import { setUserOrdersToStore } from '@/user/store/slices/myMoviesSlice';
import { MyMovieItem } from './MyMovieItem';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';
import { useStyle } from './styles';
import { MyMoviesIsEmpty } from './MyMoviesIsEmpty';
import { DataStatus } from '@/interfaces/status';
import { Circular } from '@/sharedComponents/Circular';

export const MyMovies: FunctionComponent = () => {
  const { t } = useTranslation(['UserPage']);
  const classes = useStyle();
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const { myMovies, status } = useSelector(activeOrdersSelector);

  useEffect(() => {
    dispatch(setUserOrdersToStore({ userId }));
  }, []);

  if (status === DataStatus.loading) {
    return <Circular />;
  }
  if (status === DataStatus.empty) {
    return <MyMoviesIsEmpty />;
  }

  if (status === DataStatus.success) {
    return (
      <div>
        <h1 className={classes.title}>{t('MyMovies')}</h1>
        <ul className={classes.container}>
          {myMovies.map((movie: IOrder) => (
            <MyMovieItem
              key={movie.id}
              movieId={movie.id}
              coverUrl={movie.coverUrl}
              title={movie.title}
              quality={movie.qualityId}
              duration={movie.duration}
              expirationDate={movie.expireDate}
              period={movie.period}
            />
          ))}
        </ul>
        <GoToMainPageButton />
      </div>
    );
  }
  return null;
};
