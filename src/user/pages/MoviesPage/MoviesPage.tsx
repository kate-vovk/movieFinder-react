import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Sidebar, MoviesCards, SearchBar } from '@/user/components';
import { setCartMoviesToStore } from '@/user/store/slices/cartSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { getMoviesList, setSelectedParam, removeAllFilters } from '@/user/store/slices/moviesSlice';
import { setFavoritesMoviesToStore } from '@/user/store/slices/favoritesSlice';
import { useStyle } from './styles';
import { setUserOrdersToStore } from '@/user/store/slices/myMoviesSlice';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const userId = useSelector(userIdSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
    dispatch(setCartMoviesToStore(userId));
    dispatch(setFavoritesMoviesToStore(userId));
    dispatch(setSelectedParam(''));
    dispatch(removeAllFilters());
    dispatch(setUserOrdersToStore({ userId }));
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
