import * as yup from 'yup';

export const userProfileFormValidationSchema = yup.object({
  name: yup.string().required().min(2, 'Too Short!'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  date: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)).max(new Date(Date.now())),
});
