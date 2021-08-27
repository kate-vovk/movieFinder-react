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
}));
