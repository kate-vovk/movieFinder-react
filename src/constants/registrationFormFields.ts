type TFieldsNames = 'name' | 'email' | 'password' | 'confirmPassword';

interface IField {
  fullWidth: boolean;
  name: TFieldsNames;
  label: string;
  type: string;
}

export const registrationFormFields: IField[] = [
  {
    fullWidth: true,
    name: 'name',
    label: 'Enter your name',
    type: 'text',
  },
  {
    fullWidth: true,
    name: 'email',
    label: 'Email',
    type: 'text',
  },
  {
    fullWidth: true,
    name: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    fullWidth: true,
    name: 'confirmPassword',
    label: 'Confirm password',
    type: 'password',
  },
];
