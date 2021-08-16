import { FunctionComponent } from 'react';
import { useStyle } from './styles';
import { Pagination } from './movies/Pagination/Pagination';
import { SearchField } from './movies/Search/SearchField';
import { MoviesCards } from './movies/MoviesCards/MoviesCards';
import { Sidebar } from './movies/Sidebar/Sidebar';

export const Movies: FunctionComponent = () => {
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
