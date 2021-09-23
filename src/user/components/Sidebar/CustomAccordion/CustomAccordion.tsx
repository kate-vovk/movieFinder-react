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
  filterParam: string;
  filterOptions: string[];
}

export const CustomAccordion: FunctionComponent<ICustomAccordionProps> = ({
  filterParam,
  filterOptions,
}) => {
  const { t } = useTranslation(['Filtration']);
  const classes = useStyle();
  const [option, setOption] = useState('');

  return (
    <ListItem key={filterParam}>
      <ListItemText>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={filterParam}
            id={filterParam}
          >
            <Typography> {t(filterParam)}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <FormControl component="fieldset">
              <RadioGroup aria-label={filterParam} name={filterParam} value={option}>
                {filterOptions.map((query) => {
                  return (
                    <FilterOption
                      key={query}
                      filterParam={filterParam}
                      query={query}
                      filterOption={option}
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
