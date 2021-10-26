import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '@/sharedComponents/CustomButton';
import { useStyles } from './styles';

interface IErrorMessage {
  errorMessage: string;
}

export const TableErrors: FunctionComponent<IErrorMessage> = ({ errorMessage }) => {
  const classes = useStyles();
  const history = useHistory();

  const goToPreviousPage = (): void => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      Error {errorMessage}. Please try again.
      <div>
        <CustomButton
          name="Go back" // will be altered in the future
          buttonType="button"
          className={classes.btn}
          onClick={goToPreviousPage}
        />
      </div>
    </div>
  );
};
