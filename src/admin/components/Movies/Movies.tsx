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
      return <EditButton buttonType="button" name="Edit" id={`${+params.id}`} />;
    },
    width: 100,
  },
];

export const Movies: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies({ limit: pageSize }).then((results) => {
      setMovies(results);
      setLoading(false);
    });
  }, [pageSize]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('allMovies')}</h2>
      <ControlBlock />
      {loading ? (
        <Circular />
      ) : (
        <Table
          rows={movies}
          columns={moviesTableDetails}
          onPageSizeChange={setPageSize}
          pageSize={pageSize}
        />
      )}
    </div>
  );
};
