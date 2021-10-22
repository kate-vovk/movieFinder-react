import { FunctionComponent, useState } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { THandleChangeValueFeedback } from '@/interfaces/movieTypes';
import { useStyle } from './styles';
import { addMovieComment } from '@/user/businessLogic/movieComments';
import { userIdSelector } from '@/user/store/selectors/auth';
import { DataStatus } from '@/interfaces/status';

interface IValues {
  feedback: string;
  rate: number;
}

export const MovieFeedbackForm: FunctionComponent<{
  movieId: string;
  setAddedComment: (value: boolean) => void;
  setPage: (value: number) => void;
  setMovieFeedbackStatus: (status: DataStatus) => void;
}> = ({ movieId, setAddedComment, setPage, setMovieFeedbackStatus }) => {
  const classes = useStyle();
  const [valueFeedback, setValueFeedback] = useState('');
  const userId = useSelector(userIdSelector);
  const { t } = useTranslation(['MoviePage']);

  const getValueFeedback: THandleChangeValueFeedback = (event): void => {
    setValueFeedback(event.target.value);
  };

  const handleSubmit = (values: IValues, { setSubmitting }: FormikHelpers<IValues>): void => {
    setMovieFeedbackStatus(DataStatus.loading);
    addMovieComment({ movieId, userId, comment: valueFeedback })
      .then(() => {
        setMovieFeedbackStatus(DataStatus.success);
        setAddedComment(true);
        setPage(1);
      })
      .catch(() => {
        setAddedComment(true);
        setMovieFeedbackStatus(DataStatus.success);
      });
    setAddedComment(true);
    setValueFeedback('');
    setSubmitting(false);
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
              disabled={valueFeedback === ''}
            >
              {t('submit')}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
