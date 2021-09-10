import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'lightBlue',
  },
  buttonsContainer: {
    marginLeft: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  enButton: {
    color: ({ chosenLanguage }: { chosenLanguage: string }) =>
      chosenLanguage === 'en-US' ? 'yellow' : 'black',
  },
  ruButton: {
    color: ({ chosenLanguage }: { chosenLanguage: string }) =>
      chosenLanguage === 'ru' ? 'yellow' : 'black',
  },
}));
