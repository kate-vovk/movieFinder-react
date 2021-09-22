import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useFormik, FormikHelpers } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { userSelector } from '@/selectors/auth';
import { userProfileFormFields } from '@/constants/userProfileFormFields';
import { userProfileFormValidationSchema } from '@/utils/validations/userProfileValidation';
import { useStyle } from './styles';

interface IFormInputs {
  name: string;
  email: string;
  dateOfBirth: string;
}

export const Profile: FunctionComponent = () => {
  const user = useSelector(userSelector);
  const { t } = useTranslation(['UserPage']);
  const classes = useStyle();

  const onSubmit = (values: IFormInputs, { setSubmitting }: FormikHelpers<IFormInputs>): void => {
    // Sending data to the server will be implemented later
    // eslint-disable-next-line no-alert
    alert(
      `id: ${user.userId} name: ${values.name}, email: ${values.email}, birthday: ${values.dateOfBirth}`,
    );
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      name: user.userName,
      email: user.userEmail,
      dateOfBirth: '',
    },
    validationSchema: userProfileFormValidationSchema,
    onSubmit,
  });
  return (
    <div>
      <h1 className={classes.title}>{t('Profile')}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.inputLine}>
          {userProfileFormFields.map((field) => {
            return (
              <TextField
                key={field.name}
                fullWidth={field.isFieldFullWidth}
                id={field.name}
                name={field.name}
                label={`${t(field.label)}`}
                type={field.type}
                value={formik.values[field.name]}
                className={classes.input}
                onChange={formik.handleChange}
                error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                helperText={formik.touched[field.name] && formik.errors[field.name]}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            );
          })}
        </div>
        <Button color="primary" variant="contained" type="submit" disabled={formik.isSubmitting}>
          {t('save')}
        </Button>
      </form>
    </div>
  );
};
