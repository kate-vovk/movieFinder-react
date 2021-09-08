import { Input, FormControl } from '@material-ui/core';
import { ChangeEvent, FunctionComponent } from 'react';
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
  const classes = useStyle();
  return (
    <FormControl className={classes.searchForm}>
      <InputLabel htmlFor="search">search</InputLabel>
      <Input
        type="text"
        autoComplete="off"
        placeholder="search"
        value={searchQuery}
        onChange={getSearchQuery}
        id="search"
      />
    </FormControl>
  );
};
