import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  MoviesPage,
  MoviePage,
  NotFoundPage,
  SignInForm,
  RegisterForm,
  Cart,
  UserChat,
} from '@/user/pages';
import { UserProfile } from '@/user/components/userProfile/UserProfile';
import { CLIENT_PATHS } from '@/user/constants';
import { PrivateRoute } from './PrivateRoute';

export const UserRoute: FunctionComponent = () => {
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
      <PrivateRoute exact path={`${CLIENT_PATHS.user}/:indexTab`} component={UserProfile} />
      <PrivateRoute path={CLIENT_PATHS.userChat} component={UserChat} />
      <Redirect to={CLIENT_PATHS.notFound} />
    </Switch>
  );
};
