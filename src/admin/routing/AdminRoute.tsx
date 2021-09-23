import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { AdminPanel } from '@/admin/pages/adminPanel';

export const AdminRoute: FunctionComponent = () => {
  return <Route path="/admin" component={AdminPanel} />;
};
