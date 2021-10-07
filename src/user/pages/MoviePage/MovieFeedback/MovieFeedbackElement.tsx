import { FunctionComponent, MouseEvent, useEffect, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector } from 'react-redux';
import { useStyle } from './styles';
import { userIdSelector } from '@/user/store/selectors/auth';
import {
  changeMovieComment,
  deleteComment as removeComment,
  getMovieAllComments,
} from '@/user/businessLogic/movieComments';

interface IComment {
  commentId: string;
  userName: string;
  movieId: string;
  userId: string;
  commentText: string;
  date: string;
  setMovieComments: any;
  setTotalAmountOfPages: any;
  page: number;
  limit: number;
  movieComments: any[];
}

export const MovieFeedbackElement: FunctionComponent<IComment> = ({
  commentId,
  userId,
  movieId,
  userName,
  commentText,
  date,
  setMovieComments,
  setTotalAmountOfPages,
  page,
  limit,
  movieComments,
}) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const currentUserId = useSelector(userIdSelector);

  useEffect(() => {
    getMovieAllComments({ movieId, page, limit }).then(({ results, total }) => {
      setMovieComments(Array.from(results));
      setTotalAmountOfPages(Math.ceil(total / limit));
    });
  }, [movieComments.length]);

  const clickOnMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };
  const deleteComment = (): void => {
    removeComment({ commentId, userId }).then(() => {
      getMovieAllComments({ movieId, page, limit }).then(({ results, total }) => {
        setMovieComments(Array.from(results));
        setTotalAmountOfPages(Math.ceil(total / limit));
      });
    });
  };
  const updateComment = (): void => {
    changeMovieComment({
      commentId,
      userId: currentUserId,
      comment: commentText,
    }).then(() => {
      console.log('update movie');
    });
  };

  return (
    <li className={classes.feedbackListElement}>
      <div className={classes.mainContentContainer}>
        <div className={classes.feedbackListElementHeader}>
          <h3 className={classes.feedbackListElementTitle}>{userName}</h3>
        </div>
        <p className={classes.feedbackText}>{commentText}</p>
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
            <Button onClick={updateComment}>Update comment</Button>
          </MenuItem>
        </Menu>
      </div>
    </li>
  );
};
