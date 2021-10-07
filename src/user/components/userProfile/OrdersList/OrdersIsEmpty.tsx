import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { useStyle } from './styles';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';

export const OrdersIsEmpty: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.ordersIsEmpty}>
      <h1 className={classes.title}>Orders</h1>
      <Typography>You orders are empty!</Typography>
      <GoToMainPageButton />
    </div>
  );
};
