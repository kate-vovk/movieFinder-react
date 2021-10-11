import { GridCellParams, GridColDef } from '@material-ui/data-grid';
import { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Circular } from '@/sharedComponents/Circular/Circular';
import { useStyles } from './styles';
import { Table } from '../Table';
import { ControlBlock } from './ControlBlock';
import { EditButton } from '../sharedComponents/EditButton';
import { getMovies } from '@/admin/businessLogic/movies';
import { IMovie } from '@/interfaces/movieInterface';
import { DataStatus } from '@/admin/interfaces';

const moviesTableDetails: GridColDef[] = [
  {
    field: 'title',
    headerName: 'TITLE',
    width: 400,
    editable: true,
  },
  { field: 'id', headerName: 'ID', width: 400 },
  {
    field: 'edit',
    headerName: ' ',
    renderCell: (params: GridCellParams): JSX.Element => {
      return <EditButton buttonType="button" name="Edit" id={String(params.id)} />;
    },
    width: 100,
  },
];

export const Movies: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [pageSize, setPageSize] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [dataStatus] = useState(DataStatus.initial);
  const [errorMessage] = useState('');

  useEffect(() => {
    getMovies({ limit: pageSize, page }).then((data) => {
      setMovies(data.results);
      setTotal(data.total);
      setIsLoading(false);
    });
  }, [pageSize, page]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allMovies')}</h2>
      <ControlBlock />
      {isLoading ? (
        <Circular />
      ) : (
        <Table
          page={page}
          rows={movies}
          columns={moviesTableDetails}
          onPageSizeChange={setPageSize}
          pageSize={pageSize}
          rowCount={total}
          onPageChange={setPage}
          dataStatus={dataStatus}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};
