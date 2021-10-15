import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  title: {
    margin: '0 0 40px 0',
  },
  movieTitle: {
    cursor: 'pointer',
    width: '40%',
    '@media (max-width:900px)': {
      width: '60%',
    },
    '@media (max-width:700px)': {
      width: '90%',
    },
  },
  movieQuality: {
    width: 40,
  },
  movieDuration: {
    width: 60,
  },
  movieExpiration: {
    width: 160,
    cursor: 'default',
  },
  popover: {
    width: '190px',
    height: '40px',
  },
  image: {
    width: '15%',
    height: 120,
    '@media (max-width:900px)': {
      width: '10%',
      height: 100,
    },
    '@media (max-width:700px)': {
      width: '10%',
      height: 80,
    },
  },
  container: {
    width: '60vw',
    padding: '0px',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10px',
    backgroundColor: 'lightGrey',
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:900px)': {
      width: '80%',
    },
    '@media (max-width:700px)': {
      flexDirection: 'column',
    },
  },
  hidden: {
    '@media (max-width:900px)': {
      display: 'none',
    },
  },
  muMoviesIsEmpty: {
    width: '100%',
    height: '100%',
    margin: '20px 0px',
    textAlign: 'center',
  },
}));
