import React, { FunctionComponent } from 'react';
import { Container } from '@material-ui/core';
import { AppRouter } from '../../routing/AppRouter';
import { useStyle } from './styles';

export const Main: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <main className={classes.main}>
      <Container maxWidth="lg">
        <AppRouter />
      </Container>
    </main>
  );
};
