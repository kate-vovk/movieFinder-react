import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
