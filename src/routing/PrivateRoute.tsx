import { useSelector } from 'react-redux';
import { IPrivateRouteProps } from '@/utils/interfaces/authInterfaces';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedInSelector } from '@/selectors/auth';
import { CLIENT_PATHS } from '@/constants/constants';
import { FunctionComponent } from 'react';

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({ path, component }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={CLIENT_PATHS.signin} />
  );
};
