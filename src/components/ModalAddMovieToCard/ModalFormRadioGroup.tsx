import { FunctionComponent, ChangeEvent } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { Quality } from '@/utils/interfaces/cartInterfaces';
import { useStyles } from './styles';

interface IModalFormRadioGroupProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
}

export const ModalFormRadioGroup: FunctionComponent<IModalFormRadioGroupProps> = ({
  onChange,
  value,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.modalRadio}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select movie format</FormLabel>
        <RadioGroup aria-label="quality" name="quality" value={value} onChange={onChange}>
          <FormControlLabel value={Quality.HD} control={<Radio />} label={Quality.HD} />
          <FormControlLabel value={Quality.SD} control={<Radio />} label={Quality.SD} />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
