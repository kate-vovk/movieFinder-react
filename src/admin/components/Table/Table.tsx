import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React, { FunctionComponent } from 'react';
import { useStyles } from './styles';
import { IMovie } from '@/interfaces/movieInterface';
import { rowsPerPage } from '@/admin/constants/constants';
import { NoRowsComponent } from './NoRows';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface ITableProps {
  rows: IMovie[] | IUser[] | null;
  columns: GridColDef[];
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
}

export const Table: FunctionComponent<ITableProps> = ({
  columns,
  rows,
  onPageSizeChange,
  pageSize,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {rows && (
        <DataGrid
          autoHeight
          checkboxSelection
          components={{ NoRowsOverlay: NoRowsComponent }}
          rows={rows}
          columns={columns}
          rowsPerPageOptions={rowsPerPage}
          pagination
          paginationMode="server"
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
        />
      )}
    </div>
  );
};
