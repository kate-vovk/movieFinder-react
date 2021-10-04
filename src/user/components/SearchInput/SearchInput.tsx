import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListWithQuery, setSearchOption } from '@/user/store/slices/moviesSlice';
import { moviesSelector } from '@/user/store/selectors/movies';
import { useStyle } from './styles';
import { InputBlock } from '@/sharedComponents/InputBlock';

export const SearchInput: FunctionComponent = () => {
  const { t } = useTranslation(['Search']);
  const classes = useStyle();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const { selectParam, filters } = useSelector(moviesSelector);

  const getMoviesListWithSearchQuery = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchQuery(event.target?.value);
  };

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery !== '' || searchParam === selectParam) {
      dispatch(
        getMoviesListWithQuery({
          searchQuery: debouncedSearchQuery,
          selectParam,
          filters,
        }),
      );
      dispatch(setSearchOption(debouncedSearchQuery));
    }
  }, [selectParam, debouncedSearchQuery]);

  useEffect(() => {
    setSearchParam(selectParam);
  }, [selectParam]);

  return (
    <InputBlock
      formControlClass={classes.searchForm}
      labelName={t('search')}
      type="text"
      placeholder={t('search')}
      value={searchQuery}
      onChange={getMoviesListWithSearchQuery}
      id="search"
    />
  );
};
