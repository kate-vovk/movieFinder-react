import { FunctionComponent, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useStyle } from './styles';

export const CartIsEmpty: FunctionComponent = () => {
  const { t } = useTranslation(['Cart']);
  const history = useHistory();
  const classes = useStyle();

  const goToPreviousPage = useCallback(() => {
    history.goBack();
  }, []);
  return (
    <div className={classes.cartIsEmpty}>
      <Typography>{t('emptyCart')}</Typography>
      <CustomButton buttonType="button" onClick={goToPreviousPage} name="back" />
    </div>
  );
};
