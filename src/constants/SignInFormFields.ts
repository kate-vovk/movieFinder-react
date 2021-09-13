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
    label: 'email',
    type: 'text',
  },
  {
    fullWidth: true,
    name: 'password',
    label: 'password',
    type: 'password',
  },
];
