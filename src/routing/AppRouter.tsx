import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MoviesPage, MoviePage, NotFoundPage, SignInForm, RegisterForm, Cart } from '@/components';
import { UserProfile } from '@/components/userProfile/UserProfile';
import { CLIENT_PATHS } from '@/constants';
import { mockAdmin } from '@/layout/NavBar/mockAdmin';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={CLIENT_PATHS.main}>
        <Redirect to={CLIENT_PATHS.movies} />
      </Route>
      <Route exact path={CLIENT_PATHS.signup} component={RegisterForm} />
      <Route path={CLIENT_PATHS.signin} component={SignInForm} />
      <PrivateRoute exact path={CLIENT_PATHS.movies} component={MoviesPage} />
      <PrivateRoute path={CLIENT_PATHS.cart} component={Cart} />
      <PrivateRoute path={`${CLIENT_PATHS.movies}/:id`} component={MoviePage} />
      <PrivateRoute path={CLIENT_PATHS.notFound} component={NotFoundPage} />
      <PrivateRoute path={CLIENT_PATHS.admin} component={mockAdmin} />
      <PrivateRoute exact path={`${CLIENT_PATHS.user}/:indexTab`} component={UserProfile} />
      <Redirect to={CLIENT_PATHS.notFound} />
    </Switch>
  );
};
