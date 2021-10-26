import { GridCellParams, GridColDef } from '@material-ui/data-grid';
import { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Table, EditButton } from '@/admin/components/shared';
import { ControlBlock } from './ControlBlock';
import { getMovies } from '@/admin/businessLogic/movies';
import { IMovie } from '@/interfaces/movieInterface';
import { DataStatus } from '@/admin/interfaces';
import { DeleteButton } from '../shared/DeleteButton';

const moviesTableDetails: GridColDef[] = [
  {
    field: 'title',
    headerName: 'TITLE',
    flex: 1,
    width: 400,
    editable: false,
  },
  { field: 'id', headerName: 'ID', width: 400, flex: 1, editable: false },
  {
    field: 'edit',
    flex: 0,
    headerName: ' ',
    renderCell: (params: GridCellParams): JSX.Element => {
      return <EditButton name="Edit" id={String(params.id)} />;
    },
    width: 100,
  },
  {
    field: 'deleteButton',
    headerName: ' ',
    renderCell: (params: GridCellParams): JSX.Element => {
      return <DeleteButton name="Delete" id={String(params.id)} />;
    },
    width: 100,
  },
];

export const Movies: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [pageSize, setPageSize] = useState(5);
  const [totalCount, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [dataStatus, setDataStatus] = useState(DataStatus.initial);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQueryParams, setSearchQueryParams] = useState<string>('');

  useEffect(() => {
    setDataStatus(DataStatus.loading);
    getMovies({ limit: pageSize, page, searchQueryParams })
      .then((data) => {
        setDataStatus(data.status);
        setMovies(data.results);
        setTotal(data.total);
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
        setDataStatus(DataStatus.error);
      });
  }, [pageSize, page, searchQueryParams]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allMovies')}</h2>
      <ControlBlock setSearchQueryParams={setSearchQueryParams} />
      <Table
        page={page}
        rows={movies}
        columns={moviesTableDetails}
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
