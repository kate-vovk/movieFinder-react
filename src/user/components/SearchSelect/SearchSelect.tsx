import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectProps } from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setSelectedParam } from '@/user/store/slices/moviesSlice';
import { useStyle } from './styles';
import { SelectBlock } from '@/sharedComponents/SelectBlock';
import { SearchOption } from '@/interfaces/movieInterface';

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

  const changedSelectParam = (event: ChangeEvent<{ name: string; value: SearchOption }>): void => {
    setSelectParam(event.target?.value);
  };

  useEffect(() => {
    dispatch(setSelectedParam(selectParam));
  }, [selectParam]);

  return (
    <SelectBlock
      formControlClass={classes.formControl}
      inputLabelName={t('selectOption')}
      id="demo-controlled-open-select"
      isOpen={isSelectOpen}
      onClose={selectClose}
      onOpen={selectOpen}
      value={selectParam}
      onChange={changedSelectParam as SelectProps['onChange']}
      option={Object.values(SearchOption).map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    />
  );
};
