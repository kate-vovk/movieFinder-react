import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '150%',
      '@media (max-width:1350px)': {
        width: '100%',
      },
      backgroundColor: 'lightBlue',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    feedbackIsEmpty: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'flexStart',
      alignItems: 'flexStart',
      flexDirection: 'column',
      gap: '10px',
    },
    buttonMovie: {
      margin: '0 0 20px 0',
    },
    title: { textAlign: 'left' },
    image: {
      width: '75px',
      height: '100px',
      backgroundColor: 'lightGreen',
      margin: '10px 10px 0 0',
    },
    description: {
      textAlign: 'justify',
      paddingBottom: '0px',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    details: {
      display: 'block',
    },
    header: {
      textAlign: 'left',
    },
    imageBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    card: {
      padding: '10px 20px',
      marginTop: '10px',
    },
    date: { textAlign: 'left', color: 'gray' },
    list: {
      width: '100%',
      padding: '0',
    },
    textField: {
      marginBottom: '20px',
    },
    button: {
      margin: '0 10px',
    },
  }),
);
