import { FunctionComponent, MouseEvent, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';
import { userIdSelector, userNameSelector } from '@/user/store/selectors/auth';
import {
  changeMovieComment,
  deleteComment as removeComment,
} from '@/user/businessLogic/movieComments';
import { MovieFeedbackElementEdit } from './MovieFeedbackElementEdit';

interface IComment {
  commentId: string;
  userName: string;
  userId: string;
  commentText: string;
  date: string;
  rate: number;
  setEditedComment: (value: boolean) => void;
}

export const MovieFeedbackElement: FunctionComponent<IComment> = ({
  commentId,
  userId,
  userName,
  commentText,
  date,
  rate,
  setEditedComment,
}) => {
  const { t } = useTranslation(['MoviePage']);
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const currentUserId = useSelector(userIdSelector);
  const [openEditCommentField, setOpenEditCommentField] = useState(false);
  const [editedComment, editComment] = useState<string>(commentText);
  const currentUserName = useSelector(userNameSelector);
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
          <h3 className={classes.feedbackListElementTitle}>
            {currentUserName === userName ? t('You') : userName}
          </h3>
        </div>
        {openEditCommentField ? (
          <MovieFeedbackElementEdit
            cancelEditCommentText={cancelEditCommentText}
            editCommentText={editCommentText}
            updateComment={updateComment}
            editedComment={editedComment}
          />
        ) : (
          <p className={classes.feedbackText}>{commentText}</p>
        )}
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className={classes.feedbackSidemenu}>
        <div className={classes.feedbackRate}>
          <StarIcon className={classes.feedbackRateIcon} />
          <span className={classes.feedbackRateText}>{rate}</span>
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
            <Button onClick={deleteComment}>{t('Delete comment')}</Button>
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Button
              onClick={() => {
                setOpenEditCommentField(true);
              }}
            >
              {t('Update comment')}
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </li>
  );
};
