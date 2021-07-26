import { makeStyles } from '@material-ui/core';

// export const useStyle = makeStyles(() => ({
//   paper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     // borderStyle: 'solid',
//     // border: 1,
//   },
//   form: {
//     width: '100%',
//   },
//   textField: {
//     // marginBottom: 25,
//   },
// }));
export const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
}));
