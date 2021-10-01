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
  rowCount: number;
  page: number;
  onPageSizeChange: (pageSize: number) => void;
  onPageChange: (page: number) => void;
}

export const Table: FunctionComponent<ITableProps> = ({
  columns,
  rows,
  onPageSizeChange,
  pageSize,
  rowCount,
  onPageChange,
  page,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {rows && (
        <DataGrid
          onPageChange={onPageChange}
          autoHeight
          checkboxSelection
          components={{ NoRowsOverlay: NoRowsComponent }}
          rows={rows}
          columns={columns}
          rowsPerPageOptions={rowsPerPage}
          rowCount={rowCount}
          paginationMode="server"
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          page={page}
        />
      )}
    </div>
  );
};
