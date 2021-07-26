import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RegisterForm } from '../pages/registerForm/RegisterForm';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/singup">
        <RegisterForm />
      </Route>
    </Switch>
  );
};
