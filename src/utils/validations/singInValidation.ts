import * as yup from 'yup';

export const loginFormValidationSchema = yup.object({
  email: yup.string().email('Enter a valid email xxx@xxx.xxx'),
});
