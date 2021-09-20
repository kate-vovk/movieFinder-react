import { Input, FormControl } from '@material-ui/core';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListWithQuery, setSearchOption } from '@/store/slices/moviesSlice';
import { moviesSelector } from '@/selectors/movies';
import { useStyle } from './styles';

export const SearchInput: FunctionComponent = () => {
  const { t } = useTranslation(['Search']);
  const classes = useStyle();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchQuery(event.target?.value);
  };

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { selectParam, selectedGenres, selectedCategories, selectedCountries } =
    useSelector(moviesSelector);

  useEffect(() => {
    if (debouncedSearchQuery !== '' || searchParam === selectParam) {
      dispatch(
        getMoviesListWithQuery({
          searchQuery: debouncedSearchQuery,
          selectParam,
          selectedGenres,
          selectedCategories,
          selectedCountries,
        }),
      );
      dispatch(setSearchOption(debouncedSearchQuery));
    }
  }, [selectParam, debouncedSearchQuery]);

  useEffect(() => {
    setSearchParam(selectParam);
  }, [selectParam]);

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
