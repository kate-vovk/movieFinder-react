import { Pagination as PaginationItem } from '@material-ui/lab';
import { FunctionComponent } from 'react';
import { useStyle } from './styles';

export const Pagination: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <PaginationItem count={5} />
    </div>
  );
};
