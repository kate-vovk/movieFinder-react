import { ReactNode } from 'react';

export interface IColumns {
  field: string;
  headerName: string;
  width: number;
  editable?: boolean;
}

export interface ITableProps {
  data: Array<Record<string, string>>;
  columns: IColumns[];
}

export interface ITabPanel {
  children: ReactNode;
  value: number;
  index: number;
}
