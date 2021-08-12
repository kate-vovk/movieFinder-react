import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footer: {
    marginTop: 'auto',
    marginLeft: 0,
    backgroundColor: 'lightPink',
  },
  paper: {
    backgroundColor: 'lightGrey',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px',
  },
}));
