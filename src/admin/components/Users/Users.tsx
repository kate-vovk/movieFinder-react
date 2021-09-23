import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Table } from '../Table';
import { mockUsers } from '@/admin/constants';
import { columnsUsers } from './TableTemplate';
import { SearchUsers } from './SearchUsers';

export const Users: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allUsers')}</h2>
      <SearchUsers />
      <Table data={mockUsers} columns={columnsUsers} />
    </div>
  );
};
