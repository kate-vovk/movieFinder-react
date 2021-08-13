import React, { FunctionComponent } from 'react';
import { Switch } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { PrivateRoute } from './PrivateRoute';
import { Movies } from '../components/Movies/Movies';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <PrivateRoute path="/signup" component={RegisterForm} />
      <PrivateRoute path="/movies" component={Movies} />
    </Switch>
  );
};
