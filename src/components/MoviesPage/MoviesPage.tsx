import { FunctionComponent } from 'react';
import { Pagination } from '@/components/Pagination/Pagination';
import { MoviesCards } from '@/components/MoviesCards/MoviesCards';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { SearchField } from '@/components/Search/SearchField';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div>
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.header}>
          <SearchField />
        </div>
        <MoviesCards />
        <Pagination />
      </div>
    </div>
  );
};
