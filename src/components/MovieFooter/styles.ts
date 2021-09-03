import { makeStyles } from '@material-ui/core';

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
