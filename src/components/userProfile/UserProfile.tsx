import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';
import { userSelector } from '@/selectors/auth';
import { TabPanel } from '@/components/userProfile/TabPanel';
import { useStyle } from './styles';
import { Profile } from './Profile/Profile';
import { Favorites } from './Favorites/Favorites';
import { OrdersList } from './OrdersList/OrdersList';
import { MyFeedback } from './MyFeedback/MyFeedback';

const TabItem = [
  { index: 0, name: 'Profile' },
  { index: 1, name: 'Favorites' },
  { index: 2, name: 'Orders list' },
  { index: 3, name: 'My feedback' },
];

export const UserProfile: FunctionComponent = () => {
  const userId = useSelector(userSelector);
  const [value, setValue] = useState(0);
  const classes = useStyle();

  const handleChange = (event: ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  const getTabItem = (name: string): JSX.Element | null => {
    switch (name) {
      case 'Profile':
        return <Profile />;
      case 'Favorites':
        return <Favorites />;
      case 'Orders list':
        return <OrdersList />;
      case 'My feedback':
        return <MyFeedback />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {TabItem.map((item) => (
            <Tab
              key={item.index}
              label={item.name}
              id={`vertical-tabpanel-${item.index}`}
              aria-controls={`vertical-tabpanel-${item.index}`}
            />
          ))}
        </Tabs>
        {TabItem.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {getTabItem(item.name)}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
