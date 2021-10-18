import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { useStyle } from './styles';

export const NoComments: FunctionComponent = () => {
  const { t } = useTranslation(['MoviePage']);
  const classes = useStyle();

  return (
    <div className={classes.noComments}>
      <Typography>{t('noComments')}</Typography>
    </div>
  );
};
