type TFieldsNames = 'name' | 'email' | 'dateOfBirth';

interface IField {
  isFieldFullWidth: boolean;
  name: TFieldsNames;
  label: string;
  type: string;
}

export const userProfileFormFields: IField[] = [
  {
    isFieldFullWidth: false,
    name: 'name',
    label: 'name',
    type: 'text',
  },
  {
    isFieldFullWidth: false,
    name: 'email',
    label: 'email',
    type: 'text',
  },
  {
    isFieldFullWidth: false,
    name: 'dateOfBirth',
    label: 'date of birth',
    type: 'date',
  },
];
