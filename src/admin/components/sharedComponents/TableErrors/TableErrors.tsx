import { FunctionComponent } from 'react';
import { useStyles } from './styles';

interface IErrorMessage {
  errorMessage: string;
}

export const TableErrors: FunctionComponent<IErrorMessage> = ({ errorMessage }) => {
  const classes = useStyles();
  return <div className={classes.root}>Sorry, {errorMessage}</div>;
};
