import { useSelector } from 'react-redux';
import { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedInSelector } from '@/selectors/auth';

interface IPrivateRouteProps {
  path: string;
  component: FunctionComponent;
}

export const PrivateRoute = ({ path, component }: IPrivateRouteProps): JSX.Element => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? <Route path={path} component={component} /> : <Redirect to="/signup" />;
};
