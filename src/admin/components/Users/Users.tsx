import { GridColDef } from '@material-ui/data-grid';
import { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Table } from '@/admin/components/shared';
import { SearchUsers } from './SearchUsers';
import { getUsers } from '@/admin/businessLogic/users';
import { IUser, DataStatus } from '@/admin/interfaces';

export const usersTableDetails: GridColDef[] = [
  {
    field: 'name',
    flex: 1,
    headerName: 'name',
    width: 300,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'email',
    flex: 1,
    width: 300,
    editable: false,
  },
  {
    field: 'role',
    headerName: 'role',
    flex: 0,
    width: 197,
    editable: false,
  },
  { field: 'id', hide: true },
];

export const Users: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [pageSize, setPageSize] = useState(5);
  const [totalCount, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [dataStatus, setDataStatus] = useState(DataStatus.initial);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setDataStatus(DataStatus.loading);
    getUsers({ limit: pageSize, page })
      .then((data) => {
        setDataStatus(data.status);
        setUsers(data.results);
        setTotal(data.total);
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
        setDataStatus(DataStatus.error);
      });
  }, [pageSize, page]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allUsers')}</h2>
      <SearchUsers />
      <Table
        page={page}
        rows={users}
        columns={usersTableDetails}
        onPageSizeChange={setPageSize}
        pageSize={pageSize}
        rowCount={totalCount}
        onPageChange={setPage}
        dataStatus={dataStatus}
        errorMessage={errorMessage}
      />
    </div>
  );
};
