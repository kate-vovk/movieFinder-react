import { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyle } from './styles';

interface ITabPanelProps {
  children: string;
  value: string;
}

export const TabPanel: FunctionComponent<ITabPanelProps> = ({ children, value }) => {
  const classes = useStyle();

  return (
    <div>
      <Typography>{children}</Typography>
    </div>
  );
};
