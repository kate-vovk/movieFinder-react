import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    '@media (min-width:500px)': {
      width: 200,
    },
    width: 100,
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  },
}));
