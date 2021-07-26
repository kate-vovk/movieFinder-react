import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(15),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
}));
