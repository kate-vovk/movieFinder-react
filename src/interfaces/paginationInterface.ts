import { ChangeEvent } from 'react';

export interface IPagination {
  count: number;
  page: number;
  currentPage?: number;
  changePageButton: (event: ChangeEvent<number>, value: number) => void;
}
export interface ITotalMovies {
  totalMovies: number;
}
