import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Sidebar, MoviesCards, SearchBar } from '@/components';
import { setCartMoviesToStore } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { getMoviesList, setSelectedParam } from '@/store/slices/moviesSlice';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const { userId } = useSelector(userSelector);
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
