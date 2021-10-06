import { FunctionComponent, useState } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { THandleChangeValueFeedback } from '@/interfaces/movieTypes';
import { useStyle } from './styles';
import { addMovieComment } from '@/user/businessLogic/movieComments';
import { userIdSelector } from '@/user/store/selectors/auth';

interface IValues {
  feedback: string;
  rate: number;
}

export const MovieFeedbackForm: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  const classes = useStyle();
  const [valueFeedback, setValueFeedback] = useState('');
  const userId = useSelector(userIdSelector);
  const { t } = useTranslation(['MoviePage']);

  const getValueFeedback: THandleChangeValueFeedback = (event): void => {
    setValueFeedback(event.target.value);
  };

  const handleSubmit = (values: IValues, { setSubmitting }: FormikHelpers<IValues>): void => {
    // const objValues = { rate: 0, feedback: valueFeedback };
    setTimeout(() => {
      // alert(JSON.stringify(objValues, null, 2)); // this is a temporary solution
      addMovieComment({ movieId, userId, comment: valueFeedback });
      setValueFeedback('');
      setSubmitting(false);
    }, 500);
  };

  return (
    <div>
      <Formik
        initialValues={{
          feedback: '',
          rate: 0,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={classes.feedbackFooter}>
            <TextField
              id="outlined-multiline-static"
              name="feedback"
              label={t('feedback')}
              multiline
              fullWidth
              onChange={getValueFeedback}
              value={valueFeedback}
              rows={4}
              variant="outlined"
            />
            <Button
              className={classes.feedbackButton}
              color="primary"
              variant="contained"
              type="submit"
            >
              {t('submit')}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
