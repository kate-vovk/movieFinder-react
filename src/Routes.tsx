import { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminRoute } from './admin/routing';
import { CLIENT_PATHS } from './user/constants';
import { UserRoute } from './user/routing/UserRoute';

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path={CLIENT_PATHS.admin} component={AdminRoute} />
      <Route path={CLIENT_PATHS.main} component={UserRoute} />
    </Switch>
  );
};
