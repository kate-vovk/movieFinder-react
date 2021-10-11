import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React, { FunctionComponent } from 'react';
import { useStyles } from './styles';
import { IMovie } from '@/interfaces/movieInterface';
import { IUser, DataStatus } from '@/admin/interfaces';
import { rowsPerPage } from '@/admin/constants';
import { NoRows } from './NoRows';
import { Circular } from '@/sharedComponents/Circular';
import { TableErrors } from '../sharedComponents/TableErrors';

interface ITableProps {
  rows: IMovie[] | IUser[] | null;
  columns: GridColDef[];
  pageSize: number;
  rowCount: number;
  page: number;
  onPageSizeChange: (pageSize: number) => void;
  onPageChange: (page: number) => void;
  dataStatus: DataStatus;
  errorMessage: string;
}

export const Table: FunctionComponent<ITableProps> = ({
  columns,
  rows,
  onPageSizeChange,
  pageSize,
  rowCount,
  onPageChange,
  page,
  dataStatus,
  errorMessage,
}): JSX.Element => {
  const classes = useStyles();

  if (dataStatus === DataStatus.loading) {
    return <Circular />;
  }
  if (dataStatus === DataStatus.error) {
    return <TableErrors errorMessage={errorMessage} />;
  }
  if (dataStatus === DataStatus.empty) {
    return <NoRows />;
  }
  return (
    <div className={classes.root}>
      {rows && (
        <DataGrid
          onPageChange={onPageChange}
          autoHeight
          components={{ NoRowsOverlay: NoRows }}
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
