import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    marginTop: '200px',
  },
  title: {
    textAlign: 'right',
    marginRight: '200px',
    marginBottom: '15px',
  },
}));
