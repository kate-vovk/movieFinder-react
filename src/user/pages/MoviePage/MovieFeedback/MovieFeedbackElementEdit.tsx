import { Button, TextField } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IMovieFeedbackElementEdit {
  cancelEditCommentText: () => void;
  editCommentText: (event: any) => void;
  updateComment: () => void;
  editedComment: string;
}
export const MovieFeedbackElementEdit: FunctionComponent<IMovieFeedbackElementEdit> = ({
  cancelEditCommentText,
  editCommentText,
  updateComment,
  editedComment,
}) => {
  const classes = useStyle();
  return (
    <div className={classes.feedbackElementEdit}>
      <TextField
        id="outlined-multiline-static"
        name="editComment"
        label="Edit comment"
        multiline
        fullWidth
        onChange={editCommentText}
        value={editedComment}
        rows={3}
        className={classes.feedbackElementEditTextContainer}
      />
      <div className={classes.feedbackElementEditButtonsContainer}>
        <Button
          onClick={updateComment}
          variant="outlined"
          className={classes.feedbackElementEditButton}
        >
          update comment
        </Button>
        <Button
          onClick={cancelEditCommentText}
          variant="outlined"
          className={classes.feedbackElementEditButton}
        >
          cancel
        </Button>
      </div>
    </div>
  );
};
