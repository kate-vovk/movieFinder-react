import { IColumns } from '@/interfaces/adminInterface';

export const columnsMovies: IColumns[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'title',
    headerName: 'email',
    width: 300,
    editable: true,
  },
];
