import { FunctionComponent } from 'react';
import { IComment } from '@/interfaces/commentInterfaces';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent<{
  movieComments: any[];
  // setMovieComments: any;
  // setTotalAmountOfPages: any;
  setEditedComment: any;
  // page: number;
  // limit: number;
}> = ({ movieComments, setEditedComment }) => {
  const classes = useStyle();
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Comments</h2>
      <ul className={classes.feedbackList}>
        {movieComments.map((comment: IComment) => (
          <MovieFeedbackElement
            commentId={comment.id}
            userId={comment.userId}
            userName={comment.userName}
            commentText={comment.comment}
            date={comment.date}
            setEditedComment={setEditedComment}
          />
        ))}
      </ul>
    </>
  );
};
