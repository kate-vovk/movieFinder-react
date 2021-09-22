import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { singInFormFields } from '@/constants/SignInFormFields';
import { login } from '@/store/slices/authSlice';
import { userIdSelector } from '@/selectors/auth';
import { CLIENT_PATHS } from '@/constants';
import { ILoginData } from '@/utils/interfaces/authInterfaces';
import { loginFormValidationSchema } from '@/utils/validations/singInValidation';
import { useStyle } from './styles';

export const SignInForm: FunctionComponent = () => {
  const { t } = useTranslation(['SignIn']);
  const history = useHistory();
  const isLoggedIn = useSelector(userIdSelector);

  const classes = useStyle();

  const dispatch = useDispatch();

  const onSubmit = (values: ILoginData): void => {
    dispatch(login(values));
  };

  if (isLoggedIn) {
    history.push(CLIENT_PATHS.movies);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormValidationSchema,
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
              label={t(field.label)}
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
          {t('submit')}
        </Button>
      </form>
    </div>
  );
};
