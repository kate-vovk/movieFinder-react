import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={RegisterForm} />
    </Switch>
  );
};
