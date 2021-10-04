import { FunctionComponent, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '@/user/components';
import { useStyle } from './styles';
import { CLIENT_PATHS } from '@/user/constants';

export const CartIsEmpty: FunctionComponent = () => {
  const { t } = useTranslation(['Cart']);
  const history = useHistory();
  const classes = useStyle();

  const goHome = useCallback(() => {
    history.push(CLIENT_PATHS.main);
  }, []);
  return (
    <div className={classes.cartIsEmpty}>
      <Typography>{t('emptyCart')}</Typography>
      <CustomButton buttonType="button" onClick={goHome} name="back" />
    </div>
  );
};
