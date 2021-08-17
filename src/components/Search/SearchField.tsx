import { FunctionComponent } from 'react';
import { Paper, InputBase } from '@material-ui/core';
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
