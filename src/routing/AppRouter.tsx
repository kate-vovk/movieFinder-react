import { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import { Movies } from '@/components/Movies/Movies';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Cart } from '@/components/Cart/Cart';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: '/movies' }} />
      </Route>
      <Route path="/signup" component={RegisterForm} />
      <PrivateRoute path="/movies" component={Movies} />
      <Route path="/signin" component={SignInForm} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};
