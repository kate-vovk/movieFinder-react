import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 350px)',
    gridTemplateRows: 'repeat(auto-fill, 450px)',
    justifyContent: 'center',
    margin: '10px',
    gridGap: '20px',
  },
}));
