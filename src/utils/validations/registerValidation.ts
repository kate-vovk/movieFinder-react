import * as yup from 'yup';

export const registrationFormValidationSchema = yup.object({
  name: yup.string().required().min(2, 'Too Short!'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/[a-z]/, 'Password should contain at least 1 lowercase letter')
    .matches(/[~`!@#$%^&*()_-]/, 'Password should contain at least 1 special character')
    .matches(/[A-Z]/, 'Password should contain at least 1 uppercase letter')
    .matches(/[0-9]/, 'Password should containt at least 1 number'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
