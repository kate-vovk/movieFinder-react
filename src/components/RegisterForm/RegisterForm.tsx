import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { registrationFormValidationSchema } from '@/utils/validations/registerValidation';
import { registrationFormFields } from '@/constants/registrationFormFields';
import { registrationAsync } from '@/store/slices/authSlice';
import { isLoggedInSelector } from '@/selectors/auth';
import { useStyle } from './styles';

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: FunctionComponent = () => {
  const history = useHistory();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const classes = useStyle();

  const dispatch = useDispatch();

  const onSubmit = async (values: IFormInputs): Promise<any> => {
    await dispatch(registrationAsync(values));
  };

  if (isLoggedIn) {
    history.push('/movies');
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
