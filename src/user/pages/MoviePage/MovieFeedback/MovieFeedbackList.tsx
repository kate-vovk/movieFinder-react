import { FunctionComponent, useEffect, useState } from 'react';
import { getMovieAllComments } from '@/user/businessLogic/movieComments';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  const [movieComments, setMovieComments] = useState<any[]>([]);
  useEffect(() => {
    getMovieAllComments({ movieId }).then((data) => {
      setMovieComments(data);
    });
  }, [movieComments.length]);
  const classes = useStyle();
  return (
    <div>
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
    </div>
  );
};
