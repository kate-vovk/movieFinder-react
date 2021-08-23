type TFieldsNames = 'email' | 'password';

interface IField {
  fullWidth: boolean;
  name: TFieldsNames;
  label: string;
  type: string;
}

export const singInFormFields: IField[] = [
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
];
