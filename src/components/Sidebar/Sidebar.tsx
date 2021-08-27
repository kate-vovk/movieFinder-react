import { FunctionComponent } from 'react';
import { Drawer, List, Toolbar } from '@material-ui/core';
import { sidebarFilterNamesFields } from '@/constants/sidebarFilterNamesFields';
import { useStyle } from './styles';
import { CustomAccordion } from '../CustomAccordion/CustomAccordion';

export const Sidebar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Drawer variant="permanent" classes={{ paper: classes.container }}>
      <Toolbar style={{ backgroundColor: 'lightblue' }} />
      <List>
        {sidebarFilterNamesFields.map(({ name, options }) => (
          <CustomAccordion name={name} options={options} />
        ))}
      </List>
    </Drawer>
  );
};
