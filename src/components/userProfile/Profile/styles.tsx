import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  title: {
    margin: '0 0 40px 0',
  },
  inputLine: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '30px',
  },
  input: {
    marginBottom: '20px',
  },
}));
