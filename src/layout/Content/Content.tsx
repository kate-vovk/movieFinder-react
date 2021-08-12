import React from 'react';
import { Box } from '@material-ui/core';
import { useStyle } from './styles';

interface IProps {
  children: React.ReactElement;
}

export const Content = ({ children }: IProps): React.ReactElement => {
  const classes = useStyle();
  return (
    <Box mt={8}>
      <main className={classes.content}>{children}</main>
    </Box>
  );
};
