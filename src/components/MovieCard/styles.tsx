import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: { textAlign: 'center' },
  image: {
    width: '150px',
    height: '200px',
    margin: 'auto',
    backgroundColor: 'lightGreen',
  },
  description: {
    textAlign: 'justify',
  },
}));
