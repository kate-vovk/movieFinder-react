import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListWithQuery } from '@/user/store/slices/moviesSlice';
import { movieSearchSelector } from '@/user/store/selectors/movies';
import { useStyle } from './styles';
import { InputBlock } from '@/sharedComponents/InputBlock';

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
    <InputBlock
      formControlClass={classes.searchForm}
      labelName={t('search')}
      type="text"
      placeholder={t('search')}
      value={searchQuery}
      onChange={getSearchQuery}
      id="search"
    />
  );
};
