import * as yup from 'yup';

export const registrationFormValidationSchema = yup.object({
  name: yup.string().required().min(2, 'Too Short!'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/,
      'Password should be at least 4 symbols, contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character',
    ),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
