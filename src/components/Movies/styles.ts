import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  content: {
    '@media (min-width:500px)': {
      paddingLeft: 200,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'lightBlue',
    paddingLeft: 100,
  },
  header: {
    display: 'flex',
    padding: '0px 15px',
    justifyContent: 'space-between',
    backgroundColor: 'lightGrey',
  },
}));
