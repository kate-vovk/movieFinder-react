import {
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControl,
  RadioGroup,
} from '@material-ui/core';
import { FunctionComponent, useState, ChangeEvent } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import { FilterOption } from '../FilterOption/FilterOption';
import { useStyle } from './styles';

export interface ICustomAccordionProps {
  name: string;
  options: string[];
}

export const CustomAccordion: FunctionComponent<ICustomAccordionProps> = ({ name, options }) => {
  const { t } = useTranslation(['Filtration']);
  const classes = useStyle();
  const [value, setValue] = useState(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <ListItem key={name}>
      <ListItemText>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={name} id={name}>
            <Typography> {t(name)}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <FormControl component="fieldset">
              <RadioGroup aria-label={name} name={name} value={value} onChange={handleChange}>
                {options.map((option) => (
                  <FilterOption key={option} query={option} param={name} />
                ))}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </ListItemText>
    </ListItem>
  );
};
