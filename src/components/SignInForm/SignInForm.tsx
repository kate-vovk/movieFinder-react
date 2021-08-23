import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { singInFormFields } from '@/constants/SignInFormFields';
import { loginAsync } from '@/store/slices/authSlice';
import { isLoggedInSelector } from '@/selectors/auth';
import { PATHS } from '@/constants/constants';
import { ILoginData } from '@/utils/interfaces/authInterfaces';
import { useStyle } from './styles';

export const SignInForm: FunctionComponent = () => {
  const history = useHistory();
  const isLoggedIn = useSelector(isLoggedInSelector);

  const classes = useStyle();

  const dispatch = useDispatch();

  const onSubmit = async (values: ILoginData): Promise<any> => {
    await dispatch(loginAsync(values));
  };

  if (isLoggedIn) {
    history.push(PATHS.movies);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });
  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {singInFormFields.map((field) => {
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
