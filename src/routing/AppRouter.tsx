import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { MoviesPage } from '@/components/MoviesPage/MoviesPage';
import { MoviePage } from '@/components/MoviePage/MoviePage';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Cart } from '@/components/Cart/Cart';
import { CLIENT_PATHS } from '@/constants/constants';
import { NotFoundPage } from '@/components/NotFoundPage/NotFoundPage';
import { mockAdmin } from '@/layout/NavBar/mockAdmin';
import { mockFavorites } from '@/layout/NavBar/mockFavorites';
import { mockProfile } from '@/layout/NavBar/mockProfile';
import { mockOrders } from '@/layout/NavBar/mockOrders';
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
      <PrivateRoute exact path={`${CLIENT_PATHS.movies}/:id`} component={MoviePage} />
      <PrivateRoute path={CLIENT_PATHS.notFound} component={NotFoundPage} />
      <PrivateRoute path={CLIENT_PATHS.admin} component={mockAdmin} />
      <PrivateRoute path={CLIENT_PATHS.favorites} component={mockFavorites} />
      <PrivateRoute path={CLIENT_PATHS.orders} component={mockOrders} />
      <PrivateRoute path={CLIENT_PATHS.profile} component={mockProfile} />
      <Redirect to={CLIENT_PATHS.notFound} />
    </Switch>
  );
};
