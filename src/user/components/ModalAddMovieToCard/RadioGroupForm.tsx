import { FunctionComponent, ChangeEvent } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { EQuality } from '@/user/constants/constantsModal';
import { useStyles } from './styles';

interface IRadioGroupFormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
}

export const RadioGroupForm: FunctionComponent<IRadioGroupFormProps> = ({ onChange, value }) => {
  const classes = useStyles();
  const { t } = useTranslation(['ModalAddMovieToCart']);

  return (
    <div className={classes.modalRadio}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{t('selectFormat')}</FormLabel>
        <RadioGroup aria-label="quality" name="quality" value={value} onChange={onChange}>
          {Object.values(EQuality).map((item) => (
            <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
