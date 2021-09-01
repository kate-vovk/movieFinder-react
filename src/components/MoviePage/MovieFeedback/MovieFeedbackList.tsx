import { FunctionComponent } from 'react';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.feedbackList}>
        <MovieFeedbackElement />
        <MovieFeedbackElement />
      </ul>
    </div>
  );
};
