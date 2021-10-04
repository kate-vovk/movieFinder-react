import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const MyMoviesIsEmpty: FunctionComponent = () => {
  const { t } = useTranslation(['UserPage']);
  const classes = useStyle();

  return (
    <div className={classes.muMoviesIsEmpty}>
      <Typography>{t('emptyMyMovies')}</Typography>
    </div>
  );
};
