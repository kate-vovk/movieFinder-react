import { FunctionComponent, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Button, Popover } from '@material-ui/core';
import { useStyle } from './styles';

interface IComment {
  commentId: string;
  userId: string;
  movieId: string;
  commentText: string;
}

export const MovieFeedbackElement: FunctionComponent<IComment> = ({
  commentId,
  userId,
  movieId,
  commentText,
}) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const clickOnComment = (event: any): void => {
    if (anchorEl) {
      setAnchorEl(null);
      setOpen(false);
    } else {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    }
  };
  const deleteComment = (): void => {
    setOpen(false);
  };

  const id = open ? commentId : undefined;

  return (
    <li className={classes.feedbackListElement} onClick={clickOnComment}>
      <div className={classes.feedbackListElementHeader}>
        <h3 className={classes.feedbackListElementTitle}>{userId}</h3>
        <div className={classes.feedbackListElementRate}>
          <StarIcon className={classes.feedbackListElementRateIcon} />
          <span className={classes.feedbackListElementRateText}>9</span>
        </div>
      </div>
      <p className={classes.feedbackText}>{commentText}</p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div>
          <Button onClick={deleteComment}>Remove comment</Button>
        </div>
      </Popover>
    </li>
  );
};
