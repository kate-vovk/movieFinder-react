import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { TabPanel } from '@/user/components/userProfile/TabPanel';
import { useStyle } from './styles';
import { Profile } from './Profile';
import { Favorites } from './Favorites';
import { OrdersList } from './OrdersList';
import { MyFeedback } from './MyFeedback';
import { MyMovies } from './MyMovies';

const sectionUserProfile = [
  { index: 0, name: 'Profile', component: <Profile /> },
  { index: 1, name: 'Favorites', component: <Favorites /> },
  { index: 2, name: 'Orders list', component: <OrdersList /> },
  { index: 3, name: 'My feedback', component: <MyFeedback /> },
  { index: 4, name: 'MyMovies', component: <MyMovies /> },
];

interface IParamsIndexTab {
  indexTab: string;
}

export const UserProfile: FunctionComponent = () => {
  const { indexTab } = useParams<IParamsIndexTab>();
  const [tabValue, setTabValue] = useState(Number(indexTab));
  const { t } = useTranslation(['UserPage']);
  const classes = useStyle();

  const handleChange = (event: ChangeEvent<unknown>, newValue: number): void => {
    setTabValue(newValue);
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
          className={classes.menuPanel}
        >
          {sectionUserProfile.map((item) => (
            <Tab
              key={item.index}
              label={`${t(item.name)}`}
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
