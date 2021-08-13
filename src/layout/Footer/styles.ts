import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  footer: {
    zIndex: theme.zIndex.drawer + 1,
    marginTop: 'auto',
    marginLeft: 0,
    backgroundColor: 'lightPink',
    // height: '50px',
  },
  paper: {
    backgroundColor: 'lightGrey',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px',
  },
  link: {
    width: '40px',
    height: '40px',
  },
}));
