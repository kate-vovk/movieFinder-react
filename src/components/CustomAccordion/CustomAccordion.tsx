import {
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core';
import { FunctionComponent } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FilterOption } from '@/components';
import { useStyle } from './styles';

export interface ICustomAccordionProps {
  name: string;
  options: string[];
}

export const CustomAccordion: FunctionComponent<ICustomAccordionProps> = ({ name, options }) => {
  const classes = useStyle();
  return (
    <ListItem key={name}>
      <ListItemText>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={name} id={name}>
            <Typography> {name}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            {options.map((option) => (
              <FilterOption key={option} item={option} />
            ))}
          </AccordionDetails>
        </Accordion>
      </ListItemText>
    </ListItem>
  );
};
