import { FunctionComponent } from 'react';
import { IComment } from '@/interfaces/commentInterfaces';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent<{
  movieComments: IComment[];
  setEditedComment: (value: boolean) => void;
}> = ({ movieComments, setEditedComment }) => {
  const classes = useStyle();
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Comments</h2>
      <ul className={classes.feedbackList}>
        {movieComments.map(({ id, userId, userName, comment, date }: IComment) => (
          <MovieFeedbackElement
            key={id}
            commentId={id}
            userId={userId}
            userName={userName}
            commentText={comment}
            date={date}
            setEditedComment={setEditedComment}
          />
        ))}
      </ul>
    </>
  );
};
