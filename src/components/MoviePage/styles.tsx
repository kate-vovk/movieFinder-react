import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    maxWidth: '1358px',
    margin: '0 auto',
    padding: '40px 15px 40px 15px',
  },
  buttonMovie: {
    margin: '0 0 20px 0',
  },
  contentMovie: {
    display: 'flex',
    margin: '0 0 30px 0',
  },
  descriptionMovie: {
    margin: '0 0 30px 0',
  },
  descriptionMovieTitle: {
    margin: '0 0 20px 0',
  },
  descriptionMovieText: {
    margin: '0 0 0 0',
    lineHeight: '150%',
  },
  trailerMovie: {
    margin: '0 auto 50px',
    maxWidth: '560px',
  },
}));
