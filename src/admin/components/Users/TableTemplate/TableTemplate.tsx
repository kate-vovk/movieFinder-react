import { IColumns } from '@/interfaces/adminInterface';

export const columnsUsers: IColumns[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'email',
    headerName: 'email',
    width: 300,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'name',
    width: 300,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'role',
    width: 197,
    editable: true,
  },
];
