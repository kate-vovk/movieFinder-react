import { GridColDef } from '@material-ui/data-grid';
import { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Table } from '../Table';
import { SearchUsers } from './SearchUsers';
import { getUsers } from '@/admin/businessLogic/users';
import { IUser, DataStatus } from '@/admin/interfaces';

export const usersTableDetails: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'email',
    headerName: 'email',
    width: 300,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'name',
    width: 300,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'role',
    width: 197,
    editable: true,
  },
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
        if (data?.results?.length > 0 && data?.total) {
          setUsers(data.results);
          setTotal(data.total);
          setDataStatus(DataStatus.success);
        } else {
          setErrorMessage('Sorry, please refresh the page');
          setDataStatus(DataStatus.error);
        }
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
