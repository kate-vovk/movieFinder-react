import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar, MoviesCards, SearchBar } from '@/user/components';
import { setCartMoviesToStore } from '@/user/store/slices/cartSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import {
  setSelectedParam,
  removeAllFilters,
  getMoviesListWithQuery,
} from '@/user/store/slices/moviesSlice';
import { setFavoritesMoviesToStore } from '@/user/store/slices/favoritesSlice';
import { setUserOrdersToStore } from '@/user/store/slices/myMoviesSlice';
import { moviesSelector } from '@/user/store/selectors/movies';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const userId = useSelector(userIdSelector);
  const dispatch = useDispatch();
  const { selectParam, searchQuery, filters } = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(setSelectedParam(''));
    dispatch(removeAllFilters());
    dispatch(
      getMoviesListWithQuery({
        selectParam,
        searchQuery,
        filters,
      }),
    );
    dispatch(setCartMoviesToStore(userId));
    dispatch(setFavoritesMoviesToStore(userId));
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
      </div>
    </div>
  );
};
