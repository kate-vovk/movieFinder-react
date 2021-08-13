import { FunctionComponent } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './styles';

export const SearchField: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <InputBase placeholder="Search movie" />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
