import { FunctionComponent } from 'react';
import { useStyle } from './styles';

export const OrdersList: FunctionComponent = () => {
  const classes = useStyle();

  return <h1 className={classes.title}>OrdersList</h1>;
};
