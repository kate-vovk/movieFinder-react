import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { validationSchema } from '../../utils/validations/registerValidation';
import { registrationFormFields } from '../../constants/registrationFormFields';
import { registrationAsync } from '../../store/slices/auth-slice';
import { useStyle } from './styles';

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: FunctionComponent = () => {
  const classes = useStyle();

  const dispatch = useDispatch();

  const submit = async (values: IFormInputs): Promise<any> => {
    await dispatch(registrationAsync(values));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values: IFormInputs) => {
      submit(values);
    },
  });
  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {registrationFormFields.map((field, index) => {
          return (
            <TextField
              key={index}
              fullWidth={field.fullWidth}
              id={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
              helperText={formik.touched[field.name] && formik.errors[field.name]}
            />
          );
        })}
        <Button
          className={classes.submit}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
