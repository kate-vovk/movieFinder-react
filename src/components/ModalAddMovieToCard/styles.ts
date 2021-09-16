import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
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
  }),
);
