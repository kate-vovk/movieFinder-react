import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'lightBlue',
  },
  buttonsContainer: {
    marginLeft: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));
