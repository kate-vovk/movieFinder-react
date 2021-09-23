import { FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';
import { SearchSelect, SearchInput } from '@/user/components';
import { useStyle } from './styles';

export const SearchBar: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <SearchInput />
      <SearchSelect />
    </Paper>
  );
};
