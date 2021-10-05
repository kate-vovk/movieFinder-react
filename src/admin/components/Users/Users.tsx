import { GridColDef } from '@material-ui/data-grid';
import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Table } from '../Table';
import { mockUsers } from '@/admin/constants';
import { SearchUsers } from './SearchUsers';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mockPageSize, setMockPageSize] = useState(5);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allUsers')}</h2>
      <SearchUsers />
      <Table
        rows={mockUsers}
        columns={usersTableDetails}
        pageSize={10}
        onPageSizeChange={setMockPageSize}
        page={1}
        rowCount={1}
        onPageChange={() => []}
      />
    </div>
  );
};
