import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '50px',
  },
  input: {
    width: '100%',
    paddingLeft: '15px',
    marginBottom: '40px',
  },
  formControl: {
    display: 'block',
  },
  btnSubmit: {
    width: '20%',
    margin: '30px 0 0 40%',
  },
  form: {
    border: '1px dashed #999',
    padding: '25px',
  },
  select: {
    width: '200px',
    marginBottom: '50px',
  },
}));
