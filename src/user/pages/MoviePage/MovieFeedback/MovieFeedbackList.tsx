/* eslint-disable @typescript-eslint/no-empty-function */
import { FunctionComponent } from 'react';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent<{
  movieComments: any[];
}> = ({ movieComments }) => {
  console.log('movieComments', movieComments);
  const classes = useStyle();
  return (
    <ul className={classes.feedbackList}>
      {movieComments.map((comment: any) => (
        <MovieFeedbackElement
          commentId={comment.id}
          userId={comment.userId}
          movieId={comment.filmId}
          commentText={comment.comment}
        />
      ))}
    </ul>
  );
};
