/* eslint-disable import/no-unresolved */
import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { Movies } from '@/components/Movies/Movies';
import { SignInForm } from '@/components/SignInForm/SignInForm';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: '/movies' }} />
      </Route>
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/signup" component={RegisterForm} />
      <Route exact path="/signin" component={SignInForm} />
    </Switch>
  );
};
