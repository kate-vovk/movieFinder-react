import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectProps } from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { searchOption } from '@/constants/constants';
import { setSelectedParam } from '@/store/slices/searchSlice';
import { useStyle } from './styles';

export const SearchSelect: FunctionComponent = () => {
  const classes = useStyle();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectParam, setSelectParam] = useState('');

  const dispatch = useDispatch();

  const { t } = useTranslation(['Search']);

  const selectClose = (): void => {
    setIsSelectOpen(false);
  };

  const selectOpen = (): void => {
    setIsSelectOpen(true);
  };

  const changedSelectParam = (event: ChangeEvent<{ name: string; value: searchOption }>): void => {
    setSelectParam(event.target?.value);
  };

  useEffect(() => {
    dispatch(setSelectedParam(selectParam));
  }, [selectParam]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{t('selectOption')}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isSelectOpen}
          onClose={selectClose}
          onOpen={selectOpen}
          value={selectParam}
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
