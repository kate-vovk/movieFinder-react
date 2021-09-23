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
    label: 'name',
    type: 'text',
  },
  {
    fullWidth: true,
    name: 'email',
    label: 'email',
    type: 'text',
  },
  {
    fullWidth: true,
    name: 'password',
    label: 'password',
    type: 'password',
  },
  {
    fullWidth: true,
    name: 'confirmPassword',
    label: 'confirmPassword',
    type: 'password',
  },
];
