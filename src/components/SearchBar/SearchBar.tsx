import { FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';
import { SearchSelect } from '@/components/SearchSelect/SearchSelect';
import { SearchInput } from '@/components/SearchInput/SearchInput';
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
