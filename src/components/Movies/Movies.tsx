import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { useStyle } from './styles';
import { Pagination } from './movies/Pagination/Pagination';
import { SearchField } from './movies/Search/SearchField';

export const Movies: FunctionComponent = () => {
  const classes = useStyle();
  // temporary text
  return (
    <div>
      <div className={classes.header}>
        <Button>Show Filters</Button>
        <SearchField />
      </div>
      <Pagination />
    </div>
  );
};
