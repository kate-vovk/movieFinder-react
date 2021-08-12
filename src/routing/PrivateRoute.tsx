/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { Login } from '../pages/login/Login';

export const PrivateRoute = ({ component, path, exact }) => {
  const isLogin = !!useSelector(tokenSelector);
  const finalComponent = isLogin ? component : Login;
  return <Route exact={exact} path={path} component={finalComponent} />;
};
