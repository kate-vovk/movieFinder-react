import { DataGrid } from '@material-ui/data-grid';
import { FunctionComponent } from 'react';
import { ITableProps } from '@/interfaces/adminInterface';
import { useStyles } from './styles';

export const Table: FunctionComponent<ITableProps> = ({ data, columns }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={data.length}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
    </div>
  );
};
