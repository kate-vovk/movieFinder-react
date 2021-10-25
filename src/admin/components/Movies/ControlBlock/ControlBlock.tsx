import { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { SearchMovies } from './SearchMovies';
import { useStyles } from './styles';
import { CLIENT_PATHS } from '@/admin/constants';

export const ControlBlock: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const history = useHistory();
  const classes = useStyles();
  const pushToAddMoviePage = (): void => {
    history.push(`${CLIENT_PATHS.admin}/addNewMovie`);
  };

  return (
    <div className={classes.controlBlock}>
      <SearchMovies />
      <Button
        variant="contained"
        color="primary"
        type="button"
        className={classes.addMovie}
        onClick={pushToAddMoviePage}
      >
        {t('addMovie')}
      </Button>
    </div>
  );
};
