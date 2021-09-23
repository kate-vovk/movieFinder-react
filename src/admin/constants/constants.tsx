import { Users } from '@/admin/components/Users';
import { Movies } from '@/admin/components/Movies';
import { Settings } from '@/admin/components/Settings';

export const allTabs = [
  { label: 'All users', index: 0, component: <Users /> },
  { label: 'All movies', index: 1, component: <Movies /> },
  { label: 'Site settings', index: 2, component: <Settings /> },
];
