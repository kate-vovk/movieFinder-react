import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  cartContainer: {
    margin: 5,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10px',
    backgroundColor: 'lightGrey',
  },
  content: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 120,
    '@media (max-width:500px)': {
      height: 100,
    },
  },
  title: {
    cursor: 'pointer',
    fontSize: 25,
    '@media (max-width:500px)': {
      fontSize: 20,
    },
    '@media (max-width:400px)': {
      fontSize: 15,
    },
  },
  description: {
    cursor: 'pointer',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '@media (max-width:400px)': {
      display: 'none',
    },
  },
  titleDescriptionContent: {
    width: '70%',
  },
  removePriceContent: {
    width: '10%',
  },
  image: {
    backgroundColor: 'white',
    width: 90,
    height: 140,
    '@media (max-width:500px)': {
      width: 80,
      height: 120,
    },
    '@media (max-width:400px)': {
      width: 35,
      height: 80,
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightGrey',
    padding: '0 15px',
  },
  buyButton: {
    margin: 'auto',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIsEmpty: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
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
