import { ChangeEvent, FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';
import { SearchSelect, SearchInput } from '@/components';
import { searchOption } from '@/utils/interfaces/searchOption';
import { useStyle } from './styles';

interface ISearchBarProps {
  searchQuery: string;
  selectParam: string;
  getSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  changedSelectParam: (event: ChangeEvent<{ name: string; value: searchOption }>) => void;
}

export const SearchBar: FunctionComponent<ISearchBarProps> = ({
  searchQuery,
  selectParam,
  getSearchQuery,
  changedSelectParam,
}) => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <SearchInput searchQuery={searchQuery} getSearchQuery={getSearchQuery} />
      <SearchSelect selectParam={selectParam} changedSelectParam={changedSelectParam} />
    </Paper>
  );
};
