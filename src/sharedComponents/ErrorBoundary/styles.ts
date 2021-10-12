import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  cartError: {
    height: '50vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cartErrorMessageContainer: {
    margin: 20,
  },
}));
