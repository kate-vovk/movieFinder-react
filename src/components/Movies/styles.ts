import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: 100,
    backgroundColor: 'lightBlue',
  },
  header: {
    display: 'flex',
    padding: '0px 15px',
    justifyContent: 'space-between',
    backgroundColor: 'lightGrey',
    height: '30%',
  },
}));
