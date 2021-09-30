import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { favoritesSelector } from '@/user/store/selectors/favorites';
import { setFavoritesMoviesToStore } from '@/user/store/slices/favoritesSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { TMovieFavorites } from '@/interfaces/favoritesInterface';
import { FavoritesItem } from './FavoritesItem';
import { FavoritesIsEmpty } from './FavoritesIsEmpty';
import { useStyle } from './styles';

export const Favorites: FunctionComponent = () => {
  const history = useHistory();
  const favoritesMovies = useSelector(favoritesSelector);
  const { t } = useTranslation(['UserPage']);
  const userId = useSelector(userIdSelector);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavoritesMoviesToStore(userId));
  }, []);

  const goToMainPage = (): void => {
    history.push('/');
  };

  return (
    <div>
      {favoritesMovies.length ? (
        <div>
          <h1 className={classes.title}>{t('Favorites')}</h1>
          <ul className={classes.listItem}>
            {favoritesMovies.map((movie: TMovieFavorites) => (
              <li className={classes.item}>
                <FavoritesItem key={movie.id} movie={movie} />
              </li>
            ))}
          </ul>
          <Button color="primary" variant="contained" type="button" onClick={goToMainPage}>
            {t('goHome')}
          </Button>
        </div>
      ) : (
        <FavoritesIsEmpty />
      )}
    </div>
  );
};
