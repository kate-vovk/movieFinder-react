import { Button, TextField } from '@material-ui/core';
import { ChangeEvent, FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IMovieFeedbackElementEdit {
  cancelEditFeedbackText: () => void;
  editFeedbackText: (event: ChangeEvent<HTMLInputElement>) => void;
  changeFeedback: () => void;
  editFeedback: string;
}
export const SingleFeedbackEdit: FunctionComponent<IMovieFeedbackElementEdit> = ({
  cancelEditFeedbackText,
  editFeedbackText,
  changeFeedback,
  editFeedback,
}) => {
  const classes = useStyle();

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        name="editFeedback"
        label="Edit feedback"
        multiline
        fullWidth
        onChange={editFeedbackText}
        value={editFeedback}
        rows={3}
        className={classes.textField}
      />
      <div>
        <Button
          onClick={changeFeedback}
          variant="outlined"
          className={classes.button}
          disabled={editFeedback === ''}
        >
          update feedback
        </Button>
        <Button onClick={cancelEditFeedbackText} variant="outlined">
          cancel
        </Button>
      </div>
    </>
  );
};
