import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { IPrivateRouteProps } from '@/interfaces/authInterfaces';
import { userSelector } from '@/user/store/selectors/auth';
import { CLIENT_PATHS } from '@/user/constants';

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({ path, component }) => {
  const isLoggedIn = useSelector(userSelector);
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={CLIENT_PATHS.signin} />
  );
};
