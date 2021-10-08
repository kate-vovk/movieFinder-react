import { FunctionComponent, MouseEvent, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { useStyle } from './styles';
import { userIdSelector } from '@/user/store/selectors/auth';
import {
  changeMovieComment,
  deleteComment as removeComment,
  // getMovieAllComments,
} from '@/user/businessLogic/movieComments';

interface IComment {
  commentId: string;
  userName: string;
  // movieId: string;
  userId: string;
  commentText: string;
  date: string;
  setEditedComment: (value: boolean) => void;
}

export const MovieFeedbackElement: FunctionComponent<IComment> = ({
  commentId,
  userId,
  // movieId,
  userName,
  commentText,
  date,
  setEditedComment,
}) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const currentUserId = useSelector(userIdSelector);
  const [openEditCommentField, setOpenEditCommentField] = useState(false);
  const [editedComment, editComment] = useState<string>(commentText);

  const clickOnMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };
  const deleteComment = (): void => {
    removeComment({ commentId, userId }).then(() => {
      setEditedComment(true);
    });
  };
  const updateComment = (): void => {
    changeMovieComment({
      commentId,
      userId: currentUserId,
      comment: String(editedComment),
    }).then(() => {
      setEditedComment(true);
    });
    setOpenEditCommentField(false);
  };

  const editCommentText = (event: any): void => {
    editComment(event.target.value);
    if (event.currentTarget !== anchorEl) {
      setAnchorEl(event.currentTarget);
    }
  };

  const cancelEditCommentText = (): void => {
    setOpenEditCommentField(false);
    editComment(commentText);
  };

  return (
    <li className={classes.feedbackListElement}>
      <div className={classes.mainContentContainer}>
        <div className={classes.feedbackListElementHeader}>
          <h3 className={classes.feedbackListElementTitle}>{userName}</h3>
        </div>
        {openEditCommentField ? (
          <div>
            <TextField
              id="outlined-multiline-static"
              name="editComment"
              label="Edit comment"
              multiline
              fullWidth
              onChange={editCommentText}
              value={editedComment}
              rows={3}
              variant="outlined"
            />
            <Button onClick={updateComment} variant="outlined">
              update comment
            </Button>
            <Button onClick={cancelEditCommentText} variant="outlined">
              cancel
            </Button>
          </div>
        ) : (
          <p className={classes.feedbackText}>{commentText}</p>
        )}
        <p>{date}</p>
      </div>
      <div className={classes.feedbackSidemenu}>
        <div className={classes.feedbackRate}>
          <StarIcon className={classes.feedbackRateIcon} />
          <span className={classes.feedbackRateText}>9</span>
        </div>

        {userId === currentUserId && (
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={clickOnMenu}
          >
            <MoreVertIcon />
          </IconButton>
        )}
        <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={closeMenu}>
          <MenuItem onClick={closeMenu}>
            <Button onClick={deleteComment}>Delete comment</Button>
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Button
              onClick={() => {
                setOpenEditCommentField(true);
              }}
            >
              Update comment
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </li>
  );
};
