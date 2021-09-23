import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  modalHeader: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 25,
    '@media (max-width:410px)': {
      fontSize: 20,
    },
  },
  closeButton: {
    position: 'absolute',
    fontSize: 20,
    right: theme.spacing(1),
    top: theme.spacing(2),
    '@media (max-width:410px)': {
      fontSize: 20,
      right: theme.spacing(-1),
      top: theme.spacing(1.5),
    },
  },
  form: {
    width: 400,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    '@media (max-width:510px)': {
      width: 300,
      height: 250,
    },
    '@media (max-width:410px)': {
      width: 200,
      height: 300,
    },
  },
  title: {
    fontSize: 20,
    '@media (max-width:510px)': {
      fontSize: 15,
    },
  },
  cardNumber: {
    textAlign: 'center',
    width: '100%',
  },
  dateCVVContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '@media (max-width:410px)': {
      flexDirection: 'column',
      height: '55%',
      justifyContent: 'space-around',
    },
  },
  dateCVV: {
    textAlign: 'center',
    width: '40%',
    '@media (max-width:410px)': {
      width: '100%',
    },
  },
}));
