import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  posterFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favoritesButton: {
    color: 'yellow',
  },
  cartButton: {},
  priceMovie: {
    flex: '1 1 auto',
    marginRight: '10px',
    textAlign: 'right',
  },
  priceMovieCost: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));
