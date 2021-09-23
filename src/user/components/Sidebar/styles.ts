import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    '@media (min-width:500px)': {
      width: 200,
    },
    width: 100,
  },
}));
