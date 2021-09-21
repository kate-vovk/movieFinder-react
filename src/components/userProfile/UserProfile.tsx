import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { TabPanel } from '@/components/userProfile/TabPanel';
import { useStyle } from './styles';
import { Profile } from './Profile';
import { Favorites } from './Favorites';
import { OrdersList } from './OrdersList';
import { MyFeedback } from './MyFeedback';

const sectionUserProfile = [
  { index: 0, name: 'Profile', component: <Profile /> },
  { index: 1, name: 'Favorites', component: <Favorites /> },
  { index: 2, name: 'Orders list', component: <OrdersList /> },
  { index: 3, name: 'My feedback', component: <MyFeedback /> },
];

interface IParamsIndexTab {
  indexTab: string;
}

export const UserProfile: FunctionComponent = () => {
  const { indexTab } = useParams<IParamsIndexTab>();
  const [value, setValue] = useState(Number(indexTab));
  const classes = useStyle();

  const handleChange = (event: ChangeEvent<unknown>, newValue: number): void => {
    setValue(newValue);
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
          {sectionUserProfile.map((item) => (
            <Tab
              key={item.index}
              label={item.name}
              id={`vertical-tabpanel-${item.index}`}
              aria-controls={`vertical-tabpanel-${item.index}`}
            />
          ))}
        </Tabs>
        {sectionUserProfile.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {item.component}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
