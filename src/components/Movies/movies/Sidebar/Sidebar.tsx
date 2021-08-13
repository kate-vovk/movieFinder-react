import { FunctionComponent } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Checkbox,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyle } from './styles';

export const Sidebar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Drawer variant="permanent" classes={{ paper: classes.container }}>
      <Toolbar style={{ backgroundColor: 'lightblue' }} />
      <List>
        {['Favorites', 'Genres', 'Categories'].map((filter) => (
          <ListItem key={filter}>
            <ListItemText>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={filter}
                  id={filter}
                >
                  <Typography> {filter}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  {['yes', 'no'].map((item) => (
                    <ListItem key={item} role="listitem" button>
                      <ListItemIcon>
                        <Checkbox tabIndex={-1} disableRipple />
                      </ListItemIcon>
                      <ListItemText id={item} primary={item} />
                    </ListItem>
                  ))}
                </AccordionDetails>
              </Accordion>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
