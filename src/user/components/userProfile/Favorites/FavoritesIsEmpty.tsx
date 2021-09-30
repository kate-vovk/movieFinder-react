import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import { useStyle } from './styles';

export const FavoritesIsEmpty: FunctionComponent = () => {
  const history = useHistory();
  const classes = useStyle();
  const { t } = useTranslation(['UserPage']);

  const goToMainPage = (): void => {
    history.push('/');
  };

  return (
    <div className={classes.favoritesIsEmpty}>
      <h1 className={classes.title}>{t('Favorites')}</h1>
      <Typography>{t('empty')}</Typography>
      <Button
        className={classes.buttonMovie}
        color="primary"
        variant="contained"
        type="button"
        onClick={goToMainPage}
      >
        {t('goHome')}
      </Button>
    </div>
  );
};
