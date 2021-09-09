import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';
import { userSelector } from '@/selectors/auth';
import { TabPanel } from '@material-ui/lab';
import { useStyle } from './styles';

const TabItem = [
  { index: 1, name: 'Profile' },
  { index: 2, name: 'Favorites' },
  { index: 3, name: 'Orders list' },
  { index: 4, name: 'My feedback' },
];

export const UserProfile: FunctionComponent = () => {
  const userId = useSelector(userSelector);
  const [value, setValue] = useState(1);
  const classes = useStyle();

  const handleChange = (event: ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.container}>
        <h1>{`User ${userId}`}</h1>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {TabItem.map((item) => (
            <Tab key={item.index} label={item.name} id={`vertical-tabpanel-${item.index}`} />
          ))}
        </Tabs>
        {TabItem.map((item) => (
          <TabPanel key={item.index} value={item.name}>
            {item.name}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
