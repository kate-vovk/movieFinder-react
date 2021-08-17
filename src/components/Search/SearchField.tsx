import { FunctionComponent } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './styles';
import { CustomButton } from '../CustomButton/CustomButton';

export const SearchField: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <InputBase placeholder="Search movie" />
      <CustomButton name="search" buttonType="submit" className="" onClick={() => null} />
    </Paper>
  );
};
