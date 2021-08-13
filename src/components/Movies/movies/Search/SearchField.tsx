import { FunctionComponent } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export const SearchField: FunctionComponent = () => {
  return (
    <Paper>
      <InputBase placeholder="Search movie" />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
