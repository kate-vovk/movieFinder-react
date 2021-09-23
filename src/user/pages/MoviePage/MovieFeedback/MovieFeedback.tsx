import { FunctionComponent } from 'react';
import { MovieFeedbackForm } from './MovieFeedbackForm';
import { MovieFeedbackList } from './MovieFeedbackList';

export const MovieFeedback: FunctionComponent = () => {
  return (
    <>
      <MovieFeedbackForm />
      <MovieFeedbackList />
    </>
  );
};
