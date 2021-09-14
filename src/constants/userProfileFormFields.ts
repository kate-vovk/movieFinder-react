type TFieldsNames = 'name' | 'email' | 'date';

interface IField {
  fullWidth: boolean;
  name: TFieldsNames;
  label: string;
  type: string;
}

export const userProfileFormFields: IField[] = [
  {
    fullWidth: false,
    name: 'name',
    label: 'name',
    type: 'text',
  },
  {
    fullWidth: false,
    name: 'email',
    label: 'email',
    type: 'text',
  },
  {
    fullWidth: false,
    name: 'date',
    label: 'date',
    type: 'date',
  },
];
