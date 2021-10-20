import { FunctionComponent } from 'react';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { IFeedbackData } from '@/interfaces/feedbackInterface';
import { SingleFeedback } from './SingleFeedback';
import { useStyle } from './styles';

export const MyFeedbackItem: FunctionComponent<{
  feedbackElement: IFeedbackData;
  setEditedComment: (value: boolean) => void;
}> = ({ feedbackElement, setEditedComment }) => {
  const { title, feedbackDataList } = feedbackElement;
  const classes = useStyle();

  return (
    <Accordion classes={{ root: classes.root }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.header}>
          <Typography>
            <b>{title}</b>
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        {feedbackDataList.map((feedback) => (
          <SingleFeedback
            feedback={feedback}
            key={feedback.id}
            setEditedComment={setEditedComment}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
