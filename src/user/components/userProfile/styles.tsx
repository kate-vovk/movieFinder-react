import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  container: {
    maxWidth: '1358px',
    margin: '0 auto',
    padding: '40px 15px',
    display: 'flex',
  },
  menuPanel: {
    flex: '0 0 200px',
  },
  tabPanel: {
    marginLeft: '50px',
  },
  title: {
    margin: '0 0 40px 0',
  },
}));
