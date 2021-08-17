import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { MoviesPage } from '@/components/MoviesPage/MoviesPage';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Cart } from '@/components/Cart/Cart';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
      <Route path="/signup" component={RegisterForm} />
      <PrivateRoute path="/movies" component={MoviesPage} />
      <Route path="/signin" component={SignInForm} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};
