import { Typography } from '@material-ui/core';
import { GridOverlay } from '@material-ui/data-grid';
import { FunctionComponent } from 'react';

export const NoRows: FunctionComponent = () => {
  return (
    <GridOverlay>
      <Typography variant="h6" component="h1">
        No results were found for your search
      </Typography>
    </GridOverlay>
  );
};
