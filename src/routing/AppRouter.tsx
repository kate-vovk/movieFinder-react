import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { MoviesPage } from '@/components/MoviesPage/MoviesPage';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Cart } from '@/components/Cart/Cart';
import { CLIENT_PATHS } from '@/constants/constants';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={CLIENT_PATHS.movies} />
      </Route>
      <Route exact path={CLIENT_PATHS.signup} component={RegisterForm} />
      <Route path={CLIENT_PATHS.signin} component={SignInForm} />
      <Route path={CLIENT_PATHS.cart} component={Cart} />
      <PrivateRoute path={CLIENT_PATHS.movies} component={MoviesPage} />
    </Switch>
  );
};
