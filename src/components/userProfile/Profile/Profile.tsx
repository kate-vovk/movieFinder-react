import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik, FormikHelpers } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { userSelector } from '@/selectors/auth';
import { userProfileFormFields } from '@/constants/userProfileFormFields';
import { userProfileFormValidationSchema } from '@/utils/validations/userProfileValidation';
import { useStyle } from './styles';

interface IFormInputs {
  name: string;
  email: string;
  date: string;
}

export const Profile: FunctionComponent = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const classes = useStyle();

  const onSubmit = async (
    values: IFormInputs,
    { setSubmitting }: FormikHelpers<IFormInputs>,
  ): Promise<void> => {
    // await dispatch(registration(values));
    await console.log(values);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      name: user.userName,
      email: user.userEmail,
      date: '',
    },
    validationSchema: userProfileFormValidationSchema,
    onSubmit,
  });
  return (
    <div>
      <h1 className={classes.title}>Profile</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.inputLine}>
          {userProfileFormFields.map((field) => {
            return (
              <TextField
                key={field.name}
                fullWidth={field.fullWidth}
                id={field.name}
                name={field.name}
                label={field.label}
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
          Save
        </Button>
      </form>
    </div>

    // return (
    //   <div>
    //     <h1 className={classes.title}>Profile</h1>
    //     <Formik
    //       initialValues={{
    //         userName: '',
    //         email: '',
    //         date: '',
    //       }}
    //       onSubmit={onHandleDataForCart}
    //     >
    //       {() => (
    //         <Form>
    //           <div className={classes.inputLine}>
    //             <TextField
    //               name="userName"
    //               defaultValue={user.userName}
    //               label="Name"
    //               className={classes.input}
    //               value={valueName}
    //               onChange={handleChange}
    //             />
    //             <TextField
    //               name="email"
    //               defaultValue={user.userEmail}
    //               label="Email"
    //               className={classes.input}
    //               value={valueEmail}
    //               onChange={handleChange}
    //             />
    //             <TextField
    //               name="date"
    //               label="Birthday"
    //               type="date"
    //               value={valueDate}
    //               onChange={handleChange}
    //               defaultValue="0000-00-00"
    //               className={classes.input}
    //               InputLabelProps={{
    //                 shrink: true,
    //               }}
    //             />
    //           </div>
    //           <Button color="primary" variant="contained" type="submit">
    //             Save
    //           </Button>
    //         </Form>
    //       )}
    //     </Formik>
    //   </div>
  );
};
