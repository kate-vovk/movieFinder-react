import { FunctionComponent, ChangeEvent } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { EQuality } from '@/utils/interfaces/cartInterfaces';
import { useStyles } from './styles';

interface IRadioGroupFormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
}

export const RadioGroupForm: FunctionComponent<IRadioGroupFormProps> = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.modalRadio}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select movie format</FormLabel>
        <RadioGroup aria-label="quality" name="quality" value={value} onChange={onChange}>
          {Object.values(EQuality).map((item) => (
            <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
