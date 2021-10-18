import { FunctionComponent } from 'react';
import { IComment } from '@/interfaces/commentInterfaces';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';
import { DataStatus } from '@/interfaces/status';
import { NoComments } from './NoComments';
import { Circular } from '@/sharedComponents/Circular';

export const MovieFeedbackList: FunctionComponent<{
  movieComments: IComment[];
  setEditedComment: (value: boolean) => void;
  movieFeedbackStatus: DataStatus;
  setMovieFeedbackStatus: (status: DataStatus) => void;
}> = ({ movieComments, setEditedComment, movieFeedbackStatus, setMovieFeedbackStatus }) => {
  const classes = useStyle();

  if (movieFeedbackStatus === DataStatus.loading) {
    return <Circular />;
  }

  if (movieFeedbackStatus === DataStatus.empty) {
    return <NoComments />;
  }
  if (movieFeedbackStatus === DataStatus.success || movieFeedbackStatus === DataStatus.error) {
    return (
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
            setMovieFeedbackStatus={setMovieFeedbackStatus}
          />
        ))}
      </ul>
    );
  }
  return null;
};
