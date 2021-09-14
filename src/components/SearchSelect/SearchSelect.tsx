import { ChangeEvent, FunctionComponent, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectProps } from '@material-ui/core/Select';
import { searchOption } from '@/constants/constants';
import { setSelectParam } from '@/store/slices/searchSlice';
import { useDispatch } from 'react-redux';
import { useStyle } from './styles';

export const SearchSelect: FunctionComponent = () => {
  const classes = useStyle();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const dispatch = useDispatch();

  const SelectClose = (): void => {
    setIsSelectOpen(false);
  };

  const selectOpen = (): void => {
    setIsSelectOpen(true);
  };

  const changedSelectParam = (event: ChangeEvent<{ name: string; value: searchOption }>): void => {
    dispatch(setSelectParam(event.target.value));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">select option</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isSelectOpen}
          onClose={SelectClose}
          onOpen={selectOpen}
          onChange={changedSelectParam as SelectProps['onChange']}
        >
          {Object.values(searchOption).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
