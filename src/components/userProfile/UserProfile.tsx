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
  { index: 'Profile', name: 'Profile', component: <Profile /> },
  { index: 'Favorites', name: 'Favorites', component: <Favorites /> },
  { index: 'OrdersList', name: 'Orders list', component: <OrdersList /> },
  { index: 'MyFeedback', name: 'My feedback', component: <MyFeedback /> },
];

interface IParamsIndexTab {
  indexTab: string;
}

export const UserProfile: FunctionComponent = () => {
  const { indexTab } = useParams<IParamsIndexTab>();
  const [tabValue, settabValue] = useState(indexTab);
  const classes = useStyle();

  const handleChange = (event: ChangeEvent<unknown>, newValue: string): void => {
    settabValue(newValue);
  };

  return (
    <div>
      <div className={classes.container}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabValue}
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
          <TabPanel key={item.index} tabValue={tabValue} index={item.index}>
            {item.component}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
