import { ChangeEvent, FunctionComponent, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IFeedback } from '@/interfaces/feedbackInterface';
import { SingleFeedbackEdit } from './SingleFeedbackEdit';
import { userIdSelector } from '@/user/store/selectors/auth';
import { changeUserFeedback, deleteUserFeedback } from '@/user/businessLogic/feedback';
import { useStyle } from './styles';

export const SingleFeedback: FunctionComponent<{
  feedback: IFeedback;
  setEditedComment: (value: boolean) => void;
}> = ({ feedback, setEditedComment }) => {
  const classes = useStyle();
  const { id, comment } = feedback;
  const [openEditFeedbackField, setOpenEditFeedbackField] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const userId = useSelector(userIdSelector);
  const [editFeedback, setEditFeedback] = useState<string>(comment);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const deleteFeedback = (): void => {
    deleteUserFeedback({ feedbackId: id, userId }).then(() => {
      setEditedComment(true);
    });
  };

  const changeFeedback = (): void => {
    changeUserFeedback({
      feedbackId: id,
      userId,
      feedback: String(editFeedback),
    }).then(() => {
      setEditedComment(true);
    });
    setOpenEditFeedbackField(false);
  };

  const editFeedbackText = (event: ChangeEvent<HTMLInputElement>): void => {
    setEditFeedback(event.target.value);
    if (event.currentTarget !== anchorEl) {
      setAnchorEl(event.currentTarget);
    }
  };

  const cancelEditFeedbackText = (): void => {
    setOpenEditFeedbackField(false);
    setEditFeedback(comment);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Button onClick={deleteFeedback}>Delete feedback</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button
                  onClick={() => {
                    setOpenEditFeedbackField(true);
                  }}
                >
                  edit feedback
                </Button>
              </MenuItem>
            </Menu>
          </div>
        }
        subheader={new Date(feedback.date).toLocaleString()}
      />
      {openEditFeedbackField ? (
        <SingleFeedbackEdit
          cancelEditFeedbackText={cancelEditFeedbackText}
          editFeedbackText={editFeedbackText}
          changeFeedback={changeFeedback}
          editFeedback={editFeedback}
        />
      ) : (
        <CardContent>
          <Typography variant="body2" component="p">
            {comment}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};
