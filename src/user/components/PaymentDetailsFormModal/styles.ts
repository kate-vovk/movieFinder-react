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
    '@media (max-width:280px)': {
      fontSize: 17,
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
    '@media (max-width:280px)': {
      fontSize: 10,
      top: theme.spacing(1),
    },
  },
}));
