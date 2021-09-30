import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { TabPanel } from '@/admin/components/TabPanel';
import { Users } from '@/admin/components/Users';
import { Movies } from '@/admin/components/Movies';
import { Settings } from '@/admin/components/Settings';

export const AdminPanel: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();

  const allTabs = [
    { label: 'All users', value: 'users', component: <Users /> },
    { label: 'All movies', value: 'movies', component: <Movies /> },
    { label: 'Site settings', value: 'settings', component: <Settings /> },
  ];

  const [tabValue, setTabValue] = useState(allTabs[1].value);
  const changeTab = (event: SyntheticEvent<EventTarget>, newTab: string): void => {
    setTabValue(newTab);
  };

  return (
    <>
      <h1 className={classes.title}>{t('adminPanel')}</h1>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tabValue}
            onChange={changeTab}
            className={classes.tabs}
          >
            {allTabs.map((item) => (
              <Tab
                value={item.value}
                key={item.value}
                label={item.label}
                id={`vertical-tab-${item.value}`}
                aria-controls={`vertical-tabpanel-${item.value}`}
              />
            ))}
          </Tabs>
          {allTabs.map((item) => (
            <TabPanel tabValue={tabValue} index={item.value} key={item.label}>
              {item.component}
            </TabPanel>
          ))}
        </div>
      </Box>
    </>
  );
};
