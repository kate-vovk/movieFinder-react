import { FunctionComponent, ReactNode } from 'react';
import { useStyle } from './styles';

interface ITabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
}

export const TabPanel: FunctionComponent<ITabPanelProps> = ({ children, value, index }) => {
  const classes = useStyle();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabPanel}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};
