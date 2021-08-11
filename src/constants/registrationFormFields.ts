type TFieldsNames = 'name' | 'email' | 'password' | 'confirmPassword';

interface IField {
  fullWidth: boolean;
  name: TFieldsNames;
  label: string;
}

export const registrationFormFields: IField[] = [
  {
    fullWidth: true,
    name: 'name',
    label: 'Enter your name',
  },
  {
    fullWidth: true,
    name: 'email',
    label: 'Email',
  },
  {
    fullWidth: true,
    name: 'password',
    label: 'Password',
  },
  {
    fullWidth: true,
    name: 'confirmPassword',
    label: 'Confirm password',
  },
];
