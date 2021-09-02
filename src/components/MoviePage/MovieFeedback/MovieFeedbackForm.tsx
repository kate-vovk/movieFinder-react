import { FunctionComponent, useState } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { Button, TextField, Slider } from '@material-ui/core';
import {
  THandleChangeValueSlider,
  THandleChangeValueFeedback,
} from '@/utils/interfaces/movieTypes';
import { useStyle } from './styles';

interface IValues {
  feedback: string;
  rate: number;
}

export const MovieFeedbackForm: FunctionComponent = () => {
  const classes = useStyle();
  const [valueRate, setValueRate] = useState(0);
  const [valueFeedback, setValueFeedback] = useState('');

  const getValueSlider: THandleChangeValueSlider = (_event, newValue): void => {
    setValueRate(newValue as number);
  };

  const getValueFeedback: THandleChangeValueFeedback = (event): void => {
    setValueFeedback(event.target.value);
  };

  const handleSubmit = (values: IValues, { setSubmitting }: FormikHelpers<IValues>): void => {
    const objValues = { rate: valueRate, feedback: valueFeedback };
    setTimeout(() => {
      alert(JSON.stringify(objValues, null, 2)); // this is a temporary solution
      setValueRate(0);
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
          <TextField
            id="outlined-multiline-static"
            name="feedback"
            label="Give feedback"
            multiline
            fullWidth
            onChange={getValueFeedback}
            value={valueFeedback}
            rows={4}
            variant="outlined"
          />

          <div className={classes.feedbackFooter}>
            <Slider
              name="rate"
              defaultValue={0}
              value={valueRate}
              onChange={getValueSlider}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
            />

            <Button
              className={classes.feedbackButton}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
