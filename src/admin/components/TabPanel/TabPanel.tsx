import { ReactElement, ReactNode } from 'react';

interface ITabPanel {
  children: ReactNode;
  tabValue: string;
  index: string;
}

export const TabPanel = (props: ITabPanel): ReactElement => {
  const { children, tabValue, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {tabValue === index && <div>{children}</div>}
    </div>
  );
};
