import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@/components/Pagination/Pagination';
import { MoviesCards } from '@/components/MoviesCards/MoviesCards';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { setCartMoviesToStore } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { searchOption } from '@/utils/interfaces/searchOption';
import { useStyle } from './styles';

export const MoviesPage: FunctionComponent = () => {
  const classes = useStyle();
  const { id } = useSelector(userSelector);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectParam, setSelectParam] = useState(searchOption.initial);

  const dispatch = useDispatch();

  const changedSelectParam = (event: ChangeEvent<{ name: string; value: searchOption }>): void => {
    setSelectParam(event.target.value);
  };

  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(setCartMoviesToStore(id));
  }, []);

  return (
    <div>
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.header}>
          <SearchBar
            searchQuery={searchQuery}
            selectParam={selectParam}
            getSearchQuery={getSearchQuery}
            changedSelectParam={changedSelectParam}
          />
        </div>
        <MoviesCards searchQuery={searchQuery} selectParam={selectParam} />
        <Pagination />
      </div>
    </div>
  );
};
