import { Input, FormControl } from '@material-ui/core';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListWithQuery } from '@/store/slices/searchSlice';
import { movieSearchSelector } from '@/selectors/movies';
import { useStyle } from './styles';

export const SearchInput: FunctionComponent = () => {
  const { t } = useTranslation(['Search']);
  const classes = useStyle();
  const dispatch = useDispatch();
  const selectParam = useSelector(movieSearchSelector);
  const [searchQuery, setSearchQuery] = useState('');

  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchQuery(event.target?.value);
  };

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (searchQuery !== '') {
      dispatch(getMoviesListWithQuery({ searchQuery: debouncedSearchQuery, selectParam }));
    }
  }, [selectParam, debouncedSearchQuery]);

  return (
    <FormControl className={classes.searchForm}>
      <InputLabel htmlFor="search">{t('search')}</InputLabel>
      <Input
        type="text"
        autoComplete="off"
        placeholder={t('search')}
        value={searchQuery}
        onChange={getSearchQuery}
        id="search"
      />
    </FormControl>
  );
};
