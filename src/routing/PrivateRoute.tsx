import { useSelector } from 'react-redux';
import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { isLoggedInSelector } from '@/selectors/auth';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

interface IPrivateRouteBlocks {
  path: string;
  component: FunctionComponent;
}

export const PrivateRoute = ({ path, component }: IPrivateRouteBlocks): JSX.Element => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const finalComponent = isLoggedIn ? component : RegisterForm;
  return <Route path={path} component={finalComponent} />;
};
