import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  listItem: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0px',
  },
  item: {
    display: 'flex',
    margin: '10px',
    flex: '0 0 calc(33.333% - 20px)',
    '@media (max-width:976px)': {
      flex: '0 0 calc(50% - 20px)',
    },
    '@media (max-width:768px)': {
      flex: '0 0 calc(100% - 20px)',
    },
  },
  MoviesIsEmpty: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '100px',
  },
  icon: {
    fontSize: '7rem',
  },
  header: {
    fontSize: '2rem',
  },
}));
