import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  footer: {
    zIndex: theme.zIndex.drawer + 1,
    marginTop: 'auto',
  },
  paper: {
    backgroundColor: 'lightGrey',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 15px',
    '@media (max-width:500px)': {
      flexDirection: 'column',
    },
  },
  left: {
    '@media (min-width:500px)': {
      position: 'absolute',
      left: 0,
    },
  },
  right: {
    '@media (min-width:500px)': {
      position: 'absolute',
      right: 0,
      marginRight: '15px',
    },
  },
  link: {
    width: '40px',
    height: '40px',
  },
  logo: {
    paddingTop: '10px',
    width: '40%',
  },
}));
