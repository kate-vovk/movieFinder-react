import { useSelector } from 'react-redux';
import { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedInSelector } from '@/selectors/auth';
import { PATHS } from '@/constants/constants';

interface IPrivateRouteProps {
  path: string;
  component: FunctionComponent;
}

export const PrivateRoute = ({ path, component }: IPrivateRouteProps): JSX.Element => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={PATHS.signup} />
  );
};
