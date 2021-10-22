import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { useStyle } from './styles';

export const MovieNotFound: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  const { t } = useTranslation(['MoviePage']);
  const classes = useStyle();

  return (
    <div className={classes.movieNotFound}>
      <Typography>
        {t('movieNotFound')}: {movieId}
      </Typography>
    </div>
  );
};
