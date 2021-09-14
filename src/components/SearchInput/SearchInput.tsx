import { Input, FormControl } from '@material-ui/core';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListWithQuery } from '@/store/slices/searchSlice';
import { movieSearchSelector } from '@/selectors/search';
import { useStyle } from './styles';

export const SearchInput: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const selectParam = useSelector(movieSearchSelector);
  const [searchQuery, setSearchQuery] = useState('');

  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  useEffect(() => {
    dispatch(getMoviesListWithQuery({ searchQuery: debouncedSearchQuery, selectParam }));
  }, [debouncedSearchQuery]);

  return (
    <FormControl className={classes.searchForm}>
      <InputLabel htmlFor="search">search</InputLabel>
      <Input
        type="text"
        autoComplete="off"
        placeholder="search"
        onChange={getSearchQuery}
        id="search"
      />
    </FormControl>
  );
};
