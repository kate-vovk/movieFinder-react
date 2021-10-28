import { useSelector } from 'react-redux';
import { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userRoleSelector } from '@/user/store/selectors/auth';
import { CLIENT_PATHS } from '../constants/constants';

export interface IPrivateRouteProps {
  path: string;
  component: FunctionComponent;
  exact?: boolean;
}

export const OnlyAdminRoute: FunctionComponent<IPrivateRouteProps> = ({ path, component }) => {
  const userRole = useSelector(userRoleSelector);
  return userRole === 1 ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={{ pathname: CLIENT_PATHS.movies }} />
  );
};
