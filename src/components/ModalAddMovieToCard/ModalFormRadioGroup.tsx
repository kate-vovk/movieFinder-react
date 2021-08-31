import { FunctionComponent, ChangeEvent } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useStyles } from './styles';

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
}

export const ModalFormRadioGroup: FunctionComponent<IProps> = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.modalRadio}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select movie format</FormLabel>
        <RadioGroup aria-label="quality" name="quality" value={value} onChange={onChange}>
          <FormControlLabel value="hd" control={<Radio />} label="HD" />
          <FormControlLabel value="sd" control={<Radio />} label="SD" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
