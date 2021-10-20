import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { movieQuerySelector } from '@/user/store/selectors/movies';
import { clearMovieState } from '@/user/store/slices/moviesSlice';
import { CLIENT_PATHS } from '@/user/constants';
import { useStyle } from './styles';

export const MoviesIsEmpty: FunctionComponent = () => {
  const classes = useStyle();
  const { t } = useTranslation(['Movies']);
  const dispatch = useDispatch();
  const history = useHistory();
  const movieQuery = useSelector(movieQuerySelector);

  const goToMainPage = (): void => {
    dispatch(clearMovieState());
    history.push(CLIENT_PATHS.main);
  };

  return (
    <div className={classes.MoviesIsEmpty}>
      <SearchIcon className={classes.icon} />

      <p className={classes.header}>{t(`nothingFound`)}</p>
      <p>{t(`youSearch`, { movieQuery })}</p>
      <p>{t(`suggestions`)}:</p>
      <ul>
        <li>{t(`suggestionFirst`)}</li>
        <li>{t(`suggestionSecond`)}</li>
        <li>{t(`suggestionThird`)}</li>
      </ul>
      <Button color="primary" variant="contained" type="button" onClick={goToMainPage}>
        {t('UserPage:goHome')}
      </Button>
    </div>
  );
};
