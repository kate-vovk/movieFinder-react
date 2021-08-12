import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { useStyle } from './styles';
import { Pagination } from './movies/Pagination/Pagination';

export const Movies: FunctionComponent = () => {
  const classes = useStyle();
  // temporary text
  return (
    <div>
      <div className={classes.header}>
        <Button>Show Filters</Button>
        <Button>Search</Button>
      </div>
      <Pagination />
    </div>
  );
};
