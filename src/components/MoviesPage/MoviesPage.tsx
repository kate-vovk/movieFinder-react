import { FunctionComponent, useEffect } from 'react';
import { Pagination } from '@/components/Pagination/Pagination';
import { MoviesCards } from '@/components/MoviesCards/MoviesCards';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { SearchField } from '@/components/Search/SearchField';
import { useSelector, useDispatch } from 'react-redux';
import { getCartMovies } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const { id } = useSelector(userSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartMovies(id));
  }, []);
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
