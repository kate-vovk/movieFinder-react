import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  footer: {
    marginTop: 'auto',
    margin: '0px',
  },
  paper: {
    height: '100%',
    backgroundColor: 'lightGrey',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
  },
}));
