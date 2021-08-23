import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { MoviesPage } from '@/components/MoviesPage/MoviesPage';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Cart } from '@/components/Cart/Cart';
import { PATHS } from '@/constants/constants';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={PATHS.main}>
        <Redirect to={PATHS.movies} />
      </Route>
      <Route path={PATHS.signup} component={RegisterForm} />
      <PrivateRoute path={PATHS.movies} component={MoviesPage} />
      <Route path={PATHS.signin} component={SignInForm} />
      <Route path={PATHS.cart} component={Cart} />
    </Switch>
  );
};
