import { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';
import { useStyle } from './styles';

export const Content: FunctionComponent = ({ children }) => {
  const classes = useStyle();
  return (
    <Box mt={8} className={classes.content}>
      {children}
    </Box>
  );
};
