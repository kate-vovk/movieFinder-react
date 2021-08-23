import { FunctionComponent, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useStyle } from './styles';

export const CartIsEmpty: FunctionComponent = () => {
  const history = useHistory();
  const classes = useStyle();

  const onClickGoBackHandler = useCallback(() => {
    history.goBack();
  }, []);
  return (
    <div className={classes.cartIsEmpty}>
      <Typography>Your cart is empty</Typography>
      <CustomButton buttonType="button" onClick={onClickGoBackHandler} name="back" />
    </div>
  );
};
