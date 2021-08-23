import { FunctionComponent } from 'react';
import { Paper, InputBase } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useStyle } from './styles';

export const SearchField: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <InputBase placeholder="Search movie" />
      <CustomButton name="search" buttonType="submit" />
    </Paper>
  );
};
