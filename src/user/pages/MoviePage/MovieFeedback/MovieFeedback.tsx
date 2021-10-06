import { FunctionComponent } from 'react';
import { MovieFeedbackForm } from './MovieFeedbackForm';
import { MovieFeedbackList } from './MovieFeedbackList';

export const MovieFeedback: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  return (
    <>
      <MovieFeedbackForm movieId={movieId} />
      <MovieFeedbackList movieId={movieId} />
    </>
  );
};
