import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Table } from '../Table';
import { mockMovies } from '@/admin/constants';
import { columnsMovies } from './TableTemplate';
import { ControlBlock } from './ControlBlock';

export const Movies: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allMovies')}</h2>
      <ControlBlock />
      <Table data={mockMovies} columns={columnsMovies} />
    </div>
  );
};
