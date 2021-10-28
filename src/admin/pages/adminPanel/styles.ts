import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'right',
    marginRight: '200px',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
    marginBottom: '15px',
  },
  link: {
    paddingLeft: '10px',
    textDecoration: 'none',
    fontSize: '20px',
    color: '#000',
  },
  block: {
    position: 'absolute',
    top: '400px',
    display: 'inline-block',
    marginLeft: '60px',
  },
  active: {
    borderLeft: '2px solid #999',
  },
}));
