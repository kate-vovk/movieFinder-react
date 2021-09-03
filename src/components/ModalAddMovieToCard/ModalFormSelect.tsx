import { FunctionComponent, ChangeEvent, ReactNode } from 'react';
import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from './styles';

interface IComponentNameProps {
  onChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: ReactNode,
  ) => void;
  value: number;
}

export const ModalFormSelect: FunctionComponent<IComponentNameProps> = ({ onChange, value }) => {
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
          <MenuItem value={0}>Forever</MenuItem>
          <MenuItem value={7}>For 7 days</MenuItem>
          <MenuItem value={30}>For 30 days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
