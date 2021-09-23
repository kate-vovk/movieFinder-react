import React, { FunctionComponent, SyntheticEvent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTranslation } from 'react-i18next';
import { allTabs } from '@/admin/constants';
import { useStyles } from './styles';
import { TabPanel } from '@/admin/components/TabPanel';

export const AdminPanel: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const changeTab = (event: SyntheticEvent<EventTarget>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <>
      <h1 className={classes.title}>{t('adminPanel')}</h1>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={changeTab}
          className={classes.tabs}
        >
          {allTabs.map((item) => (
            <Tab
              key={item.index}
              label={item.label}
              id={`vertical-tab-${item.index}`}
              aria-controls={`vertical-tabpanel-${item.index}`}
            />
          ))}
        </Tabs>
        {allTabs.map((item) => (
          <TabPanel value={value} index={item.index} key={item.index}>
            {item.component}
          </TabPanel>
        ))}
      </div>
    </>
  );
};
