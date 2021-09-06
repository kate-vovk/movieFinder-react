import { ChangeEvent, FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';
import { SearchSelect } from '@/components/SearchSelect/SearchSelect';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { searchOption } from '@/utils/interfaces/searchOption';
import { useStyle } from './styles';

interface IProps {
  searchQuery: string;
  selectParam: string;
  getSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  changedSelectParam: (event: ChangeEvent<{ name: string; value: searchOption }>) => void;
}

export const SearchBar: FunctionComponent<IProps> = ({
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
