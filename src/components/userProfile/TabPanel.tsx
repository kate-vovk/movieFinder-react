import { FunctionComponent, ReactNode } from 'react';
import { useStyle } from './styles';

interface ITabPanelProps {
  children?: ReactNode;
  tabValue: string;
  index: string;
}

export const TabPanel: FunctionComponent<ITabPanelProps> = ({ children, tabValue, index }) => {
  const classes = useStyle();

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabPanel}
    >
      {tabValue === index && <div>{children}</div>}
    </div>
  );
};
