import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { AdminPanel } from '@/admin/pages/adminPanel';
import { EditMoviePage } from '../pages/EditMoviePage';
import { CLIENT_PATHS } from '@/admin/constants';

export const AdminRoute: FunctionComponent = () => {
  return (
    <>
      <Route exact path={CLIENT_PATHS.admin} component={AdminPanel} />
      <Route path={`${CLIENT_PATHS.admin}/editMovie/:id`} component={EditMoviePage} />
    </>
  );
};
