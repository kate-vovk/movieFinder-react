import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { favoritesSelector } from '@/user/store/selectors/favorites';
import { setFavoritesMoviesToStore } from '@/user/store/slices/favoritesSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { TMovieFavorites } from '@/interfaces/favoritesInterface';
import { FavoritesItem } from './FavoritesItem';
import { FavoritesIsEmpty } from './FavoritesIsEmpty';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';
import { useStyle } from './styles';

export const Favorites: FunctionComponent = () => {
  const favoritesMovies = useSelector(favoritesSelector);
  const { t } = useTranslation(['UserPage']);
  const userId = useSelector(userIdSelector);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavoritesMoviesToStore(userId));
  }, []);

  return (
    <div>
      {favoritesMovies.length ? (
        <div>
          <h1 className={classes.title}>{t('Favorites')}</h1>
          <ul className={classes.listItem}>
            {favoritesMovies.map((movie: TMovieFavorites) => (
              <li className={classes.item} key={movie.id}>
                <FavoritesItem movie={movie} />
              </li>
            ))}
          </ul>
          <GoToMainPageButton />
        </div>
      ) : (
        <FavoritesIsEmpty />
      )}
    </div>
  );
};
