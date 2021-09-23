import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  columnRight: {
    flex: '1 1 auto',
    margin: '0 0 0 30px',
  },
  infoMovieTitle: {
    margin: '0 0 30px 0',
    padding: '0 0 10px 0',
    borderBottom: '1px solid #000',
  },
  infoMovieList: {
    margin: '0 0 0 0',
    padding: '0 0 0 20px',
  },
  infoMovieListElement: {
    padding: '0 0 10px 0',
  },
}));
