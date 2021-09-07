import { FunctionComponent, ChangeEvent, ReactNode } from 'react';
import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from './styles';

interface IModalFormSelectProps {
  onChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: ReactNode,
  ) => void;
  value: number;
}

const valueSelectOptions = [
  { id: 1, value: 0, text: 'Forever' },
  { id: 2, value: 7, text: 'For 7 days' },
  { id: 3, value: 30, text: 'For 30 days' },
];

export const ModalFormSelect: FunctionComponent<IModalFormSelectProps> = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.modalSelect}>
      <FormControl>
        <FormLabel component="legend" id="demo-simple-select-label">
          Select subscription period
        </FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
        >
          {valueSelectOptions.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
