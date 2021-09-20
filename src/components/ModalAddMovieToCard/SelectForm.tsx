import { FunctionComponent, ChangeEvent, ReactNode } from 'react';
import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from './styles';

interface ISelectFormProps {
  onChange: (event: ChangeEvent<{ name?: string; value: unknown }>, child: ReactNode) => void;
  value: number;
}

const selectOption = [
  { value: 0, children: 'Forever' },
  { value: 7, children: 'For 7 days' },
  { value: 30, children: 'For 30 days' },
];

export const SelectForm: FunctionComponent<ISelectFormProps> = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.modalSelect}>
      <FormControl>
        <FormLabel component="legend">Select subscription period</FormLabel>
        <Select value={value} onChange={onChange}>
          {selectOption.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.children}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
