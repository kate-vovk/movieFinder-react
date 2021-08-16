import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  content: {
    '@media (min-width:500px)': {
      paddingLeft: 200,
    },
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 100,
  },
  header: {
    display: 'flex',
    padding: '0px 15px',
    justifyContent: 'space-between',
    backgroundColor: 'lightGrey',
  },
}));
