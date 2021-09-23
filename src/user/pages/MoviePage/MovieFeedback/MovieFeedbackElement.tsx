import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStyle } from './styles';

export const MovieFeedbackElement: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <li className={classes.feedbackListElement}>
      <div className={classes.feedbackListElementHeader}>
        <h2 className={classes.feedbackListElementTitle}>David Copperfield</h2>
        <div className={classes.feedbackListElementRate}>
          <StarIcon className={classes.feedbackListElementRateIcon} />
          <span className={classes.feedbackListElementRateText}>9</span>
        </div>
      </div>
      <p className={classes.feedbackText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus corrupti nostrum
        accusamus voluptate harum maxime, laborum ad optio, reiciendis autem nihil dolores impedit?
        Architecto odio eaque est iusto beatae!
      </p>
    </li>
  );
};
