import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { registrationFormValidationSchema } from '@/utils/validations/registerValidation';
import { registrationFormFields } from '@/constants/registrationFormFields';
import { isLoggedInSelector, isLoadingSelector } from '@/selectors/auth';
import { CLIENT_PATHS } from '@/constants/constants';
import { registration } from '@/store/slices/authSlice';
import { useStyle } from './styles';

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: FunctionComponent = () => {
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const history = useHistory();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const isLoading = useSelector(isLoadingSelector);
  const classes = useStyle();

  const dispatch = useDispatch();

  const onSubmit = (values: IFormInputs, { setSubmitting }: FormikHelpers<IFormInputs>): void => {
    dispatch(registration(values));
    setSubmitting(false);
    if (isLoading) {
      setIsDisabledButton(!isDisabledButton);
    }
  };

  if (isLoggedIn) {
    history.push(CLIENT_PATHS.movies);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registrationFormValidationSchema,
    onSubmit,
  });
  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {registrationFormFields.map((field) => {
          return (
            <TextField
              key={field.name}
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
          disabled={isDisabledButton}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
