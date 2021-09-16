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
import { FunctionComponent, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import { FilterOption } from '../FilterOption/FilterOption';
import { useStyle } from './styles';

export interface ICustomAccordionProps {
  param: string;
  options: string[];
}

export const CustomAccordion: FunctionComponent<ICustomAccordionProps> = ({ param, options }) => {
  const { t } = useTranslation(['Filtration']);
  const classes = useStyle();
  const [option, setOption] = useState('');

  return (
    <ListItem key={param}>
      <ListItemText>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={param} id={param}>
            <Typography> {t(param)}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <FormControl component="fieldset">
              <RadioGroup aria-label={param} name={param} value={option}>
                {options.map((query) => {
                  return (
                    <FilterOption
                      key={query}
                      param={param}
                      query={query}
                      option={option}
                      setOption={setOption}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </ListItemText>
    </ListItem>
  );
};
