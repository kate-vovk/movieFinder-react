import { FunctionComponent } from 'react';
import { IComment } from '@/interfaces/commentInterfaces';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent<{
  movieComments: any[];
  setMovieComments: any;
  setTotalAmountOfPages: any;
  page: number;
  limit: number;
}> = ({ movieComments, setMovieComments, setTotalAmountOfPages, page, limit }) => {
  const classes = useStyle();
  return (
    <ul className={classes.feedbackList}>
      {movieComments.map((comment: IComment) => (
        <MovieFeedbackElement
          commentId={comment.id}
          userId={comment.userId}
          userName={comment.userName}
          movieId={comment.filmId}
          commentText={comment.comment}
          date={comment.date}
          setMovieComments={setMovieComments}
          setTotalAmountOfPages={setTotalAmountOfPages}
          page={page}
          limit={limit}
          movieComments={movieComments}
        />
      ))}
    </ul>
  );
};
