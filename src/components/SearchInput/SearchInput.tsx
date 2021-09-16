import { Input, FormControl } from '@material-ui/core';
import { ChangeEvent, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import { useStyle } from './styles';

interface ISearchInputQuery {
  searchQuery: string;
  getSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FunctionComponent<ISearchInputQuery> = ({
  searchQuery,
  getSearchQuery,
}) => {
  const { t } = useTranslation(['Search']);
  const classes = useStyle();
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
