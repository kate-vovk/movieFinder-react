import { FunctionComponent, ChangeEvent, ReactNode } from 'react';
import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

interface ISelectFormProps {
  onChange: (event: ChangeEvent<{ name?: string; value: unknown }>, child: ReactNode) => void;
  value: number;
}

const selectOption = [
  { value: 0, children: 'forever' },
  { value: 7, children: 'for 7 days' },
  { value: 30, children: 'for 30 days' },
];

export const SelectForm: FunctionComponent<ISelectFormProps> = ({ onChange, value }) => {
  const classes = useStyles();
  const { t } = useTranslation(['ModalAddMovieToCart']);

  return (
    <div className={classes.modalSelect}>
      <FormControl>
        <FormLabel component="legend">{t('selectPeriod')}</FormLabel>
        <Select value={value} onChange={onChange}>
          {selectOption.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {t(item.children)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
