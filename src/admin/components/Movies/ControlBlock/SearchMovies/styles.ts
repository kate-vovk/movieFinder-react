import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  moviesSearch: {
    display: 'inline-block',
    marginBottom: '20px',
  },
  input: {
    border: '1px solid #999',
    borderRadius: '5px',
    height: '25px',
    marginBottom: '10px',
    paddingLeft: '5px',
  },
  label: {
    fontSize: '14px',
    paddingLeft: '15px',
  },
}));
