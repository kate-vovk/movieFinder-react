import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Sidebar, MoviesCards, SearchBar } from '@/user/components';
import { setCartMoviesToStore } from '@/user/store/slices/cartSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { getMoviesList, setSelectedParam } from '@/user/store/slices/moviesSlice';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const userId = useSelector(userIdSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
    dispatch(setCartMoviesToStore(userId));
    dispatch(setSelectedParam(''));
  }, []);

  return (
    <div>
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.header}>
          <SearchBar />
        </div>
        <MoviesCards />
        <Pagination />
      </div>
    </div>
  );
};
