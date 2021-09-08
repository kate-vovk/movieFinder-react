import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { MoviesPage } from '@/components/MoviesPage/MoviesPage';
import { MoviePage } from '@/components/MoviePage/MoviePage';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Cart } from '@/components/Cart/Cart';
import { UserProfile } from '@/components/userProfile/UserProfile';
import { CLIENT_PATHS } from '@/constants/constants';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={CLIENT_PATHS.main}>
        <Redirect to={CLIENT_PATHS.movies} />
      </Route>
      <Route exact path={CLIENT_PATHS.signup} component={RegisterForm} />
      <Route path={CLIENT_PATHS.signin} component={SignInForm} />
      <Route path={CLIENT_PATHS.cart} component={Cart} />
      <PrivateRoute path={CLIENT_PATHS.movies} component={MoviesPage} />
      <Route path={CLIENT_PATHS.user} component={UserProfile} />
      {/* <PrivateRoute path={CLIENT_PATHS.user} component={UserProfile} /> */}
      <Route
        path={`${CLIENT_PATHS.movie}/:id`}
        render={(props) => <MoviePage id={props.match.params.id} />}
      />
    </Switch>
  );
};
