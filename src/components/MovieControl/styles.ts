import { makeStyles } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

export const useStyle = makeStyles({
  footer: {
    display: 'flex',
    backgroundColor: 'lightGrey',
    justifyContent: 'space-between',
  },
  favoritesButton: {
    color: 'yellow',
  },
  addToCartButton: {
    backgroundColor: ({ isIncluded }: { isIncluded: boolean }) =>
      isIncluded ? 'yellow' : 'lightGrey',
  },
  price: {
    color: 'red',
    alignSelf: 'flex-end',
    paddingRight: '25px',
  },
});

export const cartButtonTheme = createTheme({
  palette: {
    action: {
      disabled: 'black',
    },
  },
});
