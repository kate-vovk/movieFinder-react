import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { useStyle } from './styles';

export const Profile: FunctionComponent = () => {
  const classes = useStyle();

  const onHandleDataForCart = (values: any): void => {
    alert(values);
  };

  return (
    <div>
      <h1>Profile</h1>
      <Formik
        initialValues={{
          userName: '',
          email: '',
        }}
        onSubmit={onHandleDataForCart}
      >
        {() => (
          <Form>
            <TextField name="userName" label="Outlined" variant="outlined" />
            <TextField name="email" label="Outlined" variant="outlined" />
            {/* <SelectForm onChange={onHandleMoviePurchasePeriod} value={moviePurchasePeriod} /> */}
            <Button color="primary" variant="contained" type="submit">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
