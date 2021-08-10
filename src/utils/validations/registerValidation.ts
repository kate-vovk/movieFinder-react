import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/'[a-zA-Z][a-zA-Z]+$'/, 'Must сontain in 2 сharacters, letters and/or dash'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /'^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
