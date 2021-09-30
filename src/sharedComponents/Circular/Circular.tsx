import CircularProgress from '@material-ui/core/CircularProgress';
import { FunctionComponent } from 'react';
import { useStyles } from './styles';

export const Circular: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
