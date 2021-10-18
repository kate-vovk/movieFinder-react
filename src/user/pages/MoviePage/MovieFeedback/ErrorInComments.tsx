import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import { useStyle } from './styles';

export const ErrorInComments: FunctionComponent<{ reloadComments: (reload: boolean) => void }> = ({
  reloadComments,
}) => {
  const { t } = useTranslation(['MoviePage']);
  const classes = useStyle();

  return (
    <div className={classes.noComments}>
      <Typography>{t('errorInComments')}</Typography>
      <Button onClick={() => reloadComments(true)}>{t('reloadComments')}</Button>
    </div>
  );
};
