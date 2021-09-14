import { FunctionComponent } from 'react';
import { useStyle } from './styles';

export const MyFeedback: FunctionComponent = () => {
  const classes = useStyle();

  return <h1 className={classes.title}>MyFeedback</h1>;
};
