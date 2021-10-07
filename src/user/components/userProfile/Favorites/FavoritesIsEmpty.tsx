import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';
import { useStyle } from './styles';

export const FavoritesIsEmpty: FunctionComponent = () => {
  const classes = useStyle();
  const { t } = useTranslation(['UserPage']);

  return (
    <div className={classes.favoritesIsEmpty}>
      <h1 className={classes.title}>{t('Favorites')}</h1>
      <Typography>{t('empty')}</Typography>
      <GoToMainPageButton />
    </div>
  );
};
