import { GridOverlay } from '@material-ui/data-grid';
import { FunctionComponent } from 'react';

export const NoRowsComponent: FunctionComponent = () => {
  return (
    <GridOverlay>
      <div>Sorry, No Rows</div>
    </GridOverlay>
  );
};
