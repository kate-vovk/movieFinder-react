import { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AdminPanel } from '@/admin/pages/adminPanel';
import { Users } from '../components/Users';
import { Movies } from '../components/Movies';
import { Settings } from '../components/Settings';
import { OnlyAdminRoute } from './OnlyAdminRoute';
import { CLIENT_PATHS } from '@/admin/constants';
import { EditMoviePage } from '../pages/EditMoviePage';
import { AddNewMovie } from '@/admin/pages/AddNewMovie';

export const AdminRoute: FunctionComponent = () => {
  return (
    <>
      <AdminPanel />
      <Route path={CLIENT_PATHS.admin}>
        <Redirect to={CLIENT_PATHS.adminMovies} />
      </Route>
      <OnlyAdminRoute path={CLIENT_PATHS.adminUsers} component={Users} />
      <OnlyAdminRoute path={CLIENT_PATHS.adminMovies} component={Movies} />
      <OnlyAdminRoute path={CLIENT_PATHS.adminSettings} component={Settings} />
      <OnlyAdminRoute path={`${CLIENT_PATHS.admin}/editMovie/:id`} component={EditMoviePage} />
      <OnlyAdminRoute path={`${CLIENT_PATHS.admin}/addNewMovie`} component={AddNewMovie} />
    </>
  );
};
