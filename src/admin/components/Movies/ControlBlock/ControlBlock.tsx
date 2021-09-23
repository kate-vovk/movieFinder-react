import { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { SearchMovies } from './SearchMovies';
import { useStyles } from './styles';

export const ControlBlock: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  return (
    <div className={classes.controlBlock}>
      <SearchMovies />
      <Button variant="contained" color="primary" type="button" className={classes.addMovie}>
        {t('addMovie')}
      </Button>
    </div>
  );
};
