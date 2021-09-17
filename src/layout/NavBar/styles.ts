import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'lightBlue',
  },
  buttonsContainer: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  enButton: {
    color: ({ chosenLanguage }: { chosenLanguage: string }) =>
      chosenLanguage === 'en' ? 'yellow' : 'black',
  },
  ruButton: {
    color: ({ chosenLanguage }: { chosenLanguage: string }) =>
      chosenLanguage === 'ru' ? 'yellow' : 'black',
  },
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  buttonMovie: {
    margin: '0 0 20px 0',
  },
  logo: {
    paddingTop: '10px',
    width: '50%',
  },
  button: {
    // width: '10px',
    // padding: '0px',
    // margin: '0px',
    backgroundColor: 'pink',
  },
}));
