import { FunctionComponent } from 'react';
import { Drawer, List, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { sidebarFilterNamesFields } from '@/constants/sidebarFilterNamesFields';
import { useStyle } from './styles';
import { CustomAccordion } from '../CustomAccordion/CustomAccordion';

export const Sidebar: FunctionComponent = () => {
  const { t } = useTranslation(['Filtration']);
  const classes = useStyle();
  return (
    <Drawer variant="permanent" classes={{ paper: classes.container }}>
      <Toolbar style={{ backgroundColor: 'lightblue' }} />
      <List>
        {sidebarFilterNamesFields.map(({ name, options }) => (
          <CustomAccordion key={name} name={t(name)} options={options} />
        ))}
      </List>
    </Drawer>
  );
};
