import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      borderRadius: '10px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modalClose: {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
    modalTitle: {
      marginBottom: '15px',
      fontSize: '20px',
    },
    modalRadio: {
      marginBottom: '20px',
    },
    modalSelect: {
      marginBottom: '30px',
    },
    modalFormFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    modalFormPrice: {},
  }),
);
