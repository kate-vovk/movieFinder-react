import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@/components/Pagination/Pagination';
import { MoviesCards } from '@/components/MoviesCards/MoviesCards';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { setCartMoviesToStore } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { getMoviesList, setSelectParam } from '@/store/slices/searchSlice';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const userId = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
    dispatch(setCartMoviesToStore(userId));
    dispatch(setSelectParam(''));
  }, []);

  return (
    <div>
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.header}>
          <SearchBar />
        </div>
        <MoviesCards searchQuery="" selectParam="" />
        <Pagination />
      </div>
    </div>
  );
};
