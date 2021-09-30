import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  favoritesContainer: {
    margin: 5,
  },
  favoritesIsEmpty: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flexStart',
    alignItems: 'flexStart',
    flexDirection: 'column',
    gap: '10px',
  },
  buttonMovie: {
    margin: '0 0 20px 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'lightBlue',
    paddingTop: '10px',
  },
  title: { textAlign: 'center', flex: '1 1 auto' },
  image: {
    width: '150px',
    height: '200px',
    margin: 'auto',
    backgroundColor: 'lightGreen',
  },
  description: {
    textAlign: 'justify',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
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
}));
